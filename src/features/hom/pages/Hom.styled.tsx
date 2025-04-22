import styled from 'styled-components'

export const HomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title{
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
    
    .card_container,
    .events_container,
    .resident_container,
    .feedback_container{
        width: 100%;
        max-width: 1920px;
        margin-top: 64px;
        padding: 0 150px;
    }
    
    .img_container {
        height: 90vh;
        max-height: 866px;
        display: flex;
        justify-content: center;
        color: ${({theme}) => theme.colors.link_text.white};
        //background-image: url("../components/home_screensaver.png");
        
        .text_container {
            width: 80%;
            display: flex;
            z-index: 2;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-shadow: 1px 1px 2px #ffffff91;

            :nth-child(1) { font-size: 72px; }
            :nth-child(2) { font-size: 32px; }
        }
        
        img {
            position: absolute;
            width: 100%;
            max-width: 2000px;
            height: 90vh;
            max-height: 866px;
            object-fit: cover;
            z-index: 1;
            filter: brightness(50%);
        }
    }

    .card_container{
        
        .content{
            max-height: 900px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 48px;
        }
    }
    
    .events_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .content >{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    
    .resident_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .feedback_container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        .content > {
            max-width: 1620px;
            display: flex;
            justify-content: center;
        }
        .feedback_content{
            display: flex;
            flex-direction: row;
            gap: 35px;
        }
    }
    
    @media (max-width: 760px) {
        .card_container,
        .events_container,
        .resident_container,
        .feedback_container{
            width: 100%;
            max-width: 1920px;
            margin-top: 15px;
            padding: 0 15px;
        }
    }
    
`
