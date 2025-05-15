import { api } from '@/core'

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (payload) => ({
                url: '/auth/login',
                method: 'GET',
                params: {
                    login: payload.login,
                    password: payload.password
                }
            })
        }),
        updateProfile: builder.mutation<Promise<void>, null>({
            query: (payload) => ({
                url: '/user/update',
                method: 'PATCH',
                body: payload
            })
        })
    })
})

export const {
    useLoginMutation,
    useUpdateProfileMutation,
} = authApi