declare namespace Collections {
    interface User {
        id: number
        name: string
        lastname: string
        patronymic: string
        email: string
        passwordHash: string
        organizations: Collections.Organization
        posts: Collections.Post
        events: Collections.Events
        isAdmin: boolean
        dateCreate: string
    }

    export interface Organization {
        id: number
        name: string
        address: string
        dateCreate: string
        user: Collections.User
    }

    export interface Post {
        id: number
        name: string
        description: string
        user: Collections.User
        dateCreate: string
    }

    export interface Events {
        id: number
        name: string
        image_name: string
        content: string
        created_at: string

    }

    export interface Email {
        id: number
        senderName: string
        senderLastName: string
        senderPatronymic: string
        senderEmail: string
        senderMessage: string
        typeMessage: string
        departureDate: string
    }

}
