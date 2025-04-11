import styled from "styled-components";

export const Card_ModalWrapper = styled.div`
    width: min-content;
    padding: 24px;
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors.cards.background};
    box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);
    text-decoration: none;

    .mineCard {
        width: 340px;
        height: 270px;
        display: flex;
        //background-color: firebrick;
        .content{
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
    }

    .linerCard {
        width: 100%;
        min-width: 1200px;
        height: 120px;
        //background: greenyellow;
        .content{
            display: flex;
            flex-direction: row;
            justify-content: left;
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
    
    .content {
        width: 100%;
        height: 100%;
        align-items: center;

        .card-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: ${({theme}) => theme.colors.additional.text};
        }

        .card_btn {
            width: 160px;
            height: 41px;
        }
    }
`

// export const ModalWrapper = styled.div`
//     .modal_container {
//         max-width: 1520px;
//         max-height: 450px;
//         display: flex;
//         flex-direction: row;
//         gap: 20px;
//     }
//
//     .modal_img{
//         width: 100px;
//         overflow: hidden;
//     }
//
//     img {
//         width: 100px;
//         object-fit: cover;
//         object-position: center;
//     }
// `