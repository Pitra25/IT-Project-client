import { api } from '@/core'

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (payload) => ({
                url: '/auth/login',
                method: 'POST',
                body: payload
            })
        }),
        updateProfile: builder.mutation<Promise<void>, null>({
            query: (payload) => ({
                url: '/user/update',
                method: 'PATCH',
                body: payload
            })
        }),
        getProfile: builder.query<Collections.User, null>({
            query: () => ({
                url: '/auth/profile'
            })
        })
    })
})

export const {
    useLoginMutation
} = authApi