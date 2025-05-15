export interface LoginPayload {
    login: string
    password: string
}

export interface LoginResponse {
    token: string
    id: number
    login: string
    name: string
    lastname: string
    patronymic: string | null
    email: string
    organizations: string | null
    posts: string[] | null
    events: string[] | null
    isAdmin: boolean
    dateCreate: string
}