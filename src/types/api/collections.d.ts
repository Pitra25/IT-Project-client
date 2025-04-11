declare namespace Collections {
    interface User {
        id: number
        login: string
        password: string
        organization: string
    }

    export interface Project {
        id: number
        name: string
        type: string
        author: Collections.User
        image_name: string
        content: string
    }

    export interface Events {
        id: number
        name: string
        image_name: string
        content: string
        created_at: string
    }
}
