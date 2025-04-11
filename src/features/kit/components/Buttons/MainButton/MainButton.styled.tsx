import styled from 'styled-components'

export const MainButtonStyledWrapper = styled.div`
    font-size: ${({ theme }) => theme.fonts.noto_sans};
    
    button {
        width: 160px;
        height: 41px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //padding: 12px;
        border-radius: 10px;
        
        background: ${({theme}) => theme.colors.cards.button.background};
        color: ${({theme}) => theme.colors.cards.text.text};
    }

    &.main {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        left: 0;
        bottom: calc(66px + 5vh);
    }
`
