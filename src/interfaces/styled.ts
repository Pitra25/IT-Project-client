export interface ITheme {
    colors: {
        background: string
        primary: string
        secondary: string
        success: string
        danger: string

        bg: string,
        font: string,
        header: {
            background: string,
            border: string,
            btn: string,
        }

        additional: {}
    }

    media: {
        extraLarge: string
        large: string
        medium: string
        small: string
    }

    sizes: {
        header: { height: number }
        container: { width: number }
        footer: { height: number }
        modal: { width: number }
    }

    durations: {
        ms300: number
    }
    order: {
        header: number
        modal: number
    },

    fonts: {}
    spacing: {}
    shadows: {}
    breakpoints: {}
}

export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}