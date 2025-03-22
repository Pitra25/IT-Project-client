import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        font-family: 'Noto Sans, sans-serif';
    }
    
    html, body {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        tab-size: 4;
        color: white;
    }
`