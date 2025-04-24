import styled from 'styled-components'

export const HomWrapper = styled.div`
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

    .card_container,
    .events_container,
    .resident_container,
    .feedback_container,
    .services_container{
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

        .text_container {
            width: 80%;
            display: flex;
            z-index: 2;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-shadow: 1px 1px 2px #ffffff91;

            :nth-child(1) {
                font-size: 72px;
            }

            :nth-child(2) {
                font-size: 32px;
            }
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

    .card_container {

        .content {
            width: 100%;
            height: 100%;
            max-height: 900px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 48px;


            .card {
                width: 500px;
                height: 780px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                padding: 0;

                .card_text_container{
                    z-index: 5;
                    width: 100%;
                    height: 125px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(162, 162, 162, 0.26);
                    backdrop-filter: blur(2px);
                    box-shadow: 1px 1px 5px 4px rgba(162, 162, 162, 0.26);
                    
                    .card_text {
                        width: 100%;
                        text-align: center;
                        font-size: 40px;
                        border-radius: 10px;
                        color: ${({theme}) => theme.colors.link_text.white};
                        text-shadow: 1px 1px 2px #ffffff91;
                    }
                }
                
                img {
                    position: absolute;
                    z-index: 4;
                    width: 500px;
                    height: 780px;
                    border-radius: 10px;
                    filter: brightness(80%);
                }
            }

            .card:nth-child(1) {
                background: rgba(255, 0, 0, 0.25)
            }

            .card:nth-child(2) {
                background: rgba(0, 0, 255, 0.25)
            }

            .card:nth-child(3) {
                background: rgba(0, 128, 0, 0.25)
            }

        }
    }

    .events_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .content > {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    .resident_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .services_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .feedback_container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .content > {
            max-width: 1620px;
            display: flex;
            justify-content: center;
        }

        .feedback_content {
            display: flex;
            flex-direction: row;
            gap: 35px;
        }
    }

    @media (max-width: 760px) {
        .card_container,
        .events_container,
        .resident_container,
        .feedback_container {
            width: 100%;
            max-width: 1920px;
            margin-top: 15px;
            padding: 0 15px;
        }
    }

`
