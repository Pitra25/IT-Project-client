import styled from 'styled-components'

export const CardWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: ${({ theme }) => theme.colors.cards.border};
    
    background-color: ${({ theme }) => theme.colors.cards.background};
`
