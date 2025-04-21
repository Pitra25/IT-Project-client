import styled from 'styled-components'

export const FeedbackWrapper = styled.div`
    width: 562px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    .card{
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: 27px;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
        border: none;
        padding: 24px;
        
        .title{
            font-size: 24px;
            font-weight: bold;
        }
    }   
    .form{
        width: 100%;
        height: 100%;
        max-height: 532px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        .form-item{
            display: flex;
            flex-direction: column;
            
            gap: 5px;
            
            .message{
                max-height: 200px;
                resize: vertical;
            }
        }
        
        label{
            font-size: 16px;
            color: ${({theme}) => theme.colors.link_text.black};
        }
        input, textarea{
            border: 1px solid #D9D9D9;
            border-radius: 8px;
            padding: 12px 16px;
            font-size: 16px;
            color: ${({theme}) => theme.colors.input.text};
        }
        
        input[type=text]:focus {
            border: 1px solid #555;
        }

        button{
            width: 100%;
            height: 51px;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 17px;
            background: #A4D4BA;
        }
    }
`