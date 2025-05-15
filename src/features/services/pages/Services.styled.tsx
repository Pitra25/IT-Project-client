import styled from 'styled-components'

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 24px;
        font-weight: bold;
    }

    .content {
        width: 100%;
        max-width: 1620px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }

    ._container{
        width: 100%;
        max-width: 1920px;
        margin-top: 64px;
        padding: 0 150px;
    }

    @media (max-width: 760px) {
        ._container {
            width: 100%;
            max-width: 1920px;
            margin-top: 15px;
            padding: 0 15px;
        }
    }
`
