export interface ITheme {
    colors: {
        background: string
        link_text: {
            black: string
            white: string
        }

        header: {
            background: string
            additional: {}
        }
        footer: {
            background: string
            additional: {}
        }

        cards: {
            background: string
            border: string
            border_radius_card: string
            button: {
                background: string
            }
            text: {
                title: string
                description: string
                text: string
            }
            images: {
                border_radius: string
            }
            additional: {}
        }
        additional: {}
        input: {}
        label: {}
    }

    fonts: {}
    spacing: {}
    breakpoints: {}
    media: {
        extraLarge: string
        large: string
        medium: string
        small: string
    }
}

export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}