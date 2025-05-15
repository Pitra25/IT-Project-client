import styled from 'styled-components'

export const StyledAuthWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 110px - 296px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    
    .card {
        width: 414px;
        height: 276px;
        padding: 24px;
        border-radius: 27px;
        border: none;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);

        .heading {
            font-weight: 700;
            font-size: 24px;
            text-align: center;
            color: ${({theme}) => theme.colors.link_text.black};
            margin-bottom: 30px;
        }

        .form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
            
            .form-item {
                display: flex;
                flex-direction: column;
                gap: 10px;
    
                label {
                    font-weight: 700;
                    font-size: 16px;
                    text-align: left;
                    color: ${({theme}) => theme.colors.link_text.black};;
                }
    
                input {
                    width: 100%;
                    border-radius: 10px;
                    height: 34px;
                    background: #d9d9d9;
                    font-weight: 700;
                    font-size: 16px;
                    text-align: center;
                    color: ${({theme}) => theme.colors.link_text.black};;
    
                    outline: none;
                    border: none;
                }
            }
            
            .button {
                width: 100%;
                height: 40px;
                margin-top: 10px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #222222;
                background: ${({theme}) => theme.colors.background};
            }
            .error-message {
                font-size: 16px;
                text-align: center;
                color: red;
            }
        }
    }

    .link {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: ${({theme}) => theme.colors.link_text.black};;
    }
`