import { api } from "@/core"

export interface EventCreatePayload {
    name: string,
    description: string,
    user: string,
    dateCreate: Date
}

export const hom_eventApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createEvent: builder.mutation<Collections.Events, EventCreatePayload>({
            query: (event) => ({
                url: '/',
                method: 'POST',
                body: event
            })
        }),
        getAll: builder.query<Collections.Events[], void>({
            query: () => ({
                url: '/all',
                method: 'GET',
            })
        })
    })

})