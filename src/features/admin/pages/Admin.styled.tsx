import styled from 'styled-components'

export const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title_container {
        width: 100%;
        display: flex;
        justify-content: space-between;

    }

    .title {
        font-size: 24px;
        font-weight: bold;
        // background-color: blue;
    }

    .content {
        width: 100%;
        max-width: 1620px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
    
    .projects_events_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        gap: 35px;
        // background-color: gray;
    }

    .services_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        gap: 35px;
        // background-color: gray;
    }
    
    .projects_events_container {
        // width: 790px;
        min-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    .services_container {
        width: 100%;
        min-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    .card_title {
        width: 100%;

    }
        
    .cards_container {
        // width: 100%;

        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    .services_cards_container {
        // width: 100%;

        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        gap: 35px;
    }

    .card {
        width: 790px;
        height: 208px;
        display: flex;
        padding: 24px;

        gap: 24px;


        background-color: white;
        border-radius: 27px;
        
    }

    .card_image {
        width: 160px;
        min-width: 160px;

        height: 160px;

        border-radius: 13px;
        background-color: gray;
    }

    .card_info {
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: auto;

    }

    .card_text {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .card_buttons {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: end;
        gap: 16px;

    }


    .add_button_container {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: end;      

    }

    .add_button {
        width: 160px;
        height: 41px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;

        position: absolute;
        right: 0px;
        top: 0px;
    }

    .edit_button {
        width: 160px;
        height: 41px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #A4D4BA;
    }

    .remove_button {
        width: 160px;
        height: 41px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF8686;
    }
    

    .admin_container{
        width: 100%;
        max-width: 1920px;
        margin-top: 64px;
        padding: 64px 150px;
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

// import styled from 'styled-components'
//
// export const AdminWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//
//     .title {
//         font-size: 24px;
//         font-weight: bold;
//     }
//
//     .content {
//         width: 100%;
//         max-width: 1620px;
//         display: flex;
//         flex-direction: column;
//         gap: 48px;
//     }
//
//     ._container{
//         width: 100%;
//         max-width: 1920px;
//         margin-top: 64px;
//         padding: 0 150px;
//     }
//
//     @media (max-width: 760px) {
//         ._container {
//             width: 100%;
//             max-width: 1920px;
//             margin-top: 15px;
//             padding: 0 15px;
//         }
//     }
// `
