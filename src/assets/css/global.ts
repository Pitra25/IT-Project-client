import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        font-family: ${({ theme }) => theme.fonts.noto_sans};
    }
    
    html, body {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;

        tab-size: 4;
        color: white;
    }
`