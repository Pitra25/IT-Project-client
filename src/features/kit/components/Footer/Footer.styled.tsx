import styled from 'styled-components'

export const FooterStyledWrapper = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.colors.footer.background};
`
