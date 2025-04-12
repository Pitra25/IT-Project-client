import styled from "styled-components";

export const RouterProtectWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    flex: 1;
    background: ${({theme}) => theme.colors.background};
`