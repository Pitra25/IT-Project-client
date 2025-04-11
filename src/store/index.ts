import { api } from '@/core'
import { authActions, authReducer } from '@/auth/store/auth.slice.ts'

export const reducers = {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
}

export const actions = {
    ...authActions,
}