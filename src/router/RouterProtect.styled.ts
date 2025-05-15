import styled from "styled-components";

export const RouterProtectWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    flex-grow: 1;
    background: ${({theme}) => theme.colors.background};
`