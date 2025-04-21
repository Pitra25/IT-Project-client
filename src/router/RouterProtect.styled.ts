import styled from "styled-components";

export const RouterProtectWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    flex: 1;
    background: ${({theme}) => theme.colors.background};
`