import styled from 'styled-components'

export const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    background: rgba(255, 0, 0, 0.45);

    .ymap {
        max-width: 1023px;
        height: 532px;
        border-radius: 27px;
        overflow: hidden;
        box-shadow: 2px 2px 20px 0px rgb(0 0 0 / 15%);
    }
`
