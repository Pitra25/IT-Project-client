import styled from "styled-components";

export const MineCardWrapper = styled.div`
    width: 340px;
    height: 270px;
    display: flex;
    padding: 24px;
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors.cards.background};
    box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    //background-color: firebrick;
    .card_content{
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 24px;

        .card-img {
            width: 290px;
        }
    }
    img {
        width: 290px;
        height: 160px;
        object-fit: cover;
        object-position: center;
        border-radius: 13px;
    }
    
`

export const LinerCardWrapper = styled.div`
    width: 100%;
    //min-width: 1200px;
    height: 100%;
    //max-height: 150px;
    padding: 24px;
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors.cards.background};
    box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    //background: greenyellow;

    .card_content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 24px;    
        .card-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: ${({theme}) => theme.colors.additional.text};
            gap: 24px;

            .card-img {
                width: 160px;
                overflow: hidden;
            }
        }

        img {
            width: 160px;
            object-fit: cover;
            object-position: center;
            border-radius: 13px;
        }
    }

    /* Мобильные устройства (портретная ориентация) */
    @media (max-width: 575.98px) {
        width: 450px;
        .card_content{
            display: flex;
            flex-direction: column;
        }
    }

    /* Мобильные устройства (альбомная ориентация) и маленькие планшеты */
    @media (min-width: 576px) and (max-width: 767.98px) {
        width: 650px;
    }

    /* Планшеты */
    @media (min-width: 768px) and (max-width: 991.98px) {
        width: 800px;
    }

    /* Ноутбуки и маленькие десктопы */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        width: 900px;
    }

    /* Большие десктопы */
    @media (min-width: 1200px) {
        width: 1000px;
    }

    /* Очень большие экраны (4K и подобные) */
    @media (min-width: 1600px) {
        width: 1620px;
    }

    /* Особые стили для ландшафтной ориентации на мобильных */
    @media (max-height: 500px) and (orientation: landscape) {
       
    }
    
`

export const PictureTitleWrapper = styled.div`
    max-width: 340px;
    height: 270px;
    display: flex;
    cursor: pointer;
    padding: 24px;
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors.cards.background};
    box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);
    text-decoration: none;

    .card_content{
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 24px;

        .card-img {
            width: 290px;
        }
    }
    img {
        width: 290px;
        height: 160px;
        object-fit: cover;
        object-position: center;
        border-radius: 13px;
    }
`

export const RowContentWrapper = styled.div`
    width: 790px;
    height: 208px;
    display: flex;
    cursor: pointer;
    padding: 24px;
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors.cards.background};
    box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    
    .row_content{
        width: 100%;
    }
    
    .card_content{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: 24px;

        .card-img {
            width: 290px;
        }
    }
    img {
        width: 290px;
        height: 160px;
        object-fit: cover;
        object-position: center;
        border-radius: 13px;
    }
`
