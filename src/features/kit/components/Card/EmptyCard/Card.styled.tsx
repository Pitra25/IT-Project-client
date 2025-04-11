import styled from 'styled-components'

export const CardWrapper = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.cards.background};
    border: ${({ theme }) => theme.colors.cards.border};
    border-radius: 10px;
`
