import styled from 'styled-components'

export const StyledAuthWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .heading {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        color: ${({theme}) => theme.colors.link_text.black};
        margin-bottom: 30px;
    }

    .card {
        width: 100%;
        max-width: 450px;
        padding: 30px 80px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.49);
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .error-message {
        font-size: 16px;
        text-align: center;
        color: red;
    }

    .button {
        margin-top: 10px;
    }

    .form-item {
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
            font-weight: 700;
            font-size: 16px;
            text-align: center;
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

    .link {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: ${({theme}) => theme.colors.link_text.black};;
    }
`