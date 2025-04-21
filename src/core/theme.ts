import { DefaultTheme } from 'styled-components'
import { ThemeEnum, ITheme } from '../interfaces/styled'

// ITheme - used for static theme
export const baseTheme : ITheme = {
    colors: {
        background: '#D1E5DA',
        link_text: {
            black: '#000',
            white: '#FFFFFF'
        },

        header: {
            background: '#A4D4BA',
            additional: {}
        },
        footer: {
            background: '#A4D4BA',
            additional: {}
        },

        cards: {
            background: '#ffffff',
            border: '1px solid #9EBAC9',
            border_radius_card: '27px',
            button: {
                background: 'rgba(164,212,186,0.81)',
            },
            text: {
                title: '#000',
                description: '#117575',
                text: "#000",
            },
            images: {
                border_radius: '13px'
            },
            additional: {}
        },

        additional: {
            hover: '#262626',
        },

        input: {
            text: '#B3B3B3'
        },
        label: {}
    },
    fonts: {
        noto_sans: 'Noto Sans, sans-serif',
        comfortaa: 'Comfortaa, sans-serif',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
    },
    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },
}

// DefaultTheme - used for dynamic themes
export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        bg: '#E5E4E8',
        font: '#19191B',
    },
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        bg: '#19191B',
        font: '#E5E4E8',
    },
}
