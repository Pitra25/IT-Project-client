import styled from 'styled-components'

export const StyledAuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: calc(100vh - 20px);
    
    .heading {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        color: var(--color-header-auth);
        margin-bottom: 30px;
    }
    
    .card {
        width: 100%;
        max-width: 450px;
        padding: 30px 80px;
        background: #191919;
        border-radius: 20px;
        border: none;
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
            color: #fff;
        }

        input {
            width: 100%;
            border-radius: 10px;
            height: 34px;
            background: var(--background-input-auth);
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: var(--color-input-auth);

            outline: none;
            border: none;
        }
    }
    
    .link {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: var(--color-link-auth);
    }
`
