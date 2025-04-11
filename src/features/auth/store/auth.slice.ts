import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import type { LoginResponse } from '../types/login.types'

interface AuthState {
    user: {
        isAuth: boolean
        token: string | undefined | null
        id: number | undefined
        login: string | undefined
    }
}

const user = JSON.parse(Cookies.get('user') ?? '{}') as {
    token?: string
    id?: number
    login?: string
}

const initialState: AuthState = {
    user: {
        isAuth: user?.token != null,
        token: user?.token,
        id: user?.id,
        login: user?.login,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<LoginResponse>) {
            Cookies.set('token', payload.token)
            Cookies.set('user', JSON.stringify(payload))

            state.user = {
                ...payload,
                isAuth: true
            }
        },
        removeUser(state) {
            Cookies.remove('token')
            Cookies.remove('user')

            state.user.token = null
            state.user.id = undefined
            state.user.login = undefined
            state.user.isAuth = false
        }
    }
})

export const { reducer: authReducer, actions: authActions } = authSlice