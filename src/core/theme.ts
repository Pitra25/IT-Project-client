import { DefaultTheme } from 'styled-components'
import { ThemeEnum, ITheme } from '../interfaces/styled'

// ITheme - используется для статичной темы
export const baseTheme : ITheme = {
    colors: {
        background: '#141414',
        primary: '#7986cb',
        secondary: '#2b2b2b',
        success: '#4caf50',
        danger: '#000',

        header: {
            background: '#707070',
            border: '#363738',
            btn: '#000'
        },

        bg: '#E5E4E8',
        font: '#19191B',

        additional: {
            text: '#e1e3e6',
            gray_text: '#939393',
            revert_text: '#222222',
            hover: '#262626',
        }
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
    shadows: {
        small: '0 2px 4px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
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

    // in px
    sizes: {
        header: { height: 56 },
        container: { width: 1200 },
        footer: { height: 128 },
        modal: { width: 540 },
    },
    // in ms
    durations: {
        ms300: 300,
    },
    // z-index
    order: {
        header: 50,
        modal: 100,
    },
}

// DefaultTheme - используется для динамических тем
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
