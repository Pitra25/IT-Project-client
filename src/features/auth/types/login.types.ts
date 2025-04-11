export interface LoginPayload {
    login: string
    password: string
}

export interface LoginResponse {
    token: string
    id: number
    login: string
}