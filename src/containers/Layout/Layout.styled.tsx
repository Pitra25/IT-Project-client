import styled from 'styled-components'
import { Layout } from 'antd'

export const StyledLayout = styled(Layout)`
    min-height: 100vh;
    display: flex;
    margin:auto;
    background-color: ${({theme}) => theme.colors.background};
`
