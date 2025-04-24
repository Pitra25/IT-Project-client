import styled from "styled-components"

export const CardListWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //flex-wrap: wrap;
    
    .column{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
    }
    .row_component{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
    }
`