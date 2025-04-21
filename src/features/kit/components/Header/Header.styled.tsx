import styled from 'styled-components'

export const HeaderStyledWrapper = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.colors.header.background};
    z-index: 10;
    
    .container{
        width: 100%;
        max-width: 2000px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px;
        margin: 0 100px;
    }

    .header_container {
        display: flex;
        flex-direction: row;

        &.nav_language {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    a, h1, button {
        color: ${({theme}) => theme.text};
        text-decoration: none;
        font-size: 20px;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        cursor: pointer;
    }

    button:hover {
        text-decoration: none;
    }

    .nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_heading {
        width: 230px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & :nth-child(1) {
            font-size: 35px;
        }

        & :nth-child(2) {
            font-size: 12px;
        }

        & :nth-child(3) {
            font-size: 12px;
            font-weight: bold;
        }
    }

    .header_logo {
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
        //background: #e1e3e6;

        img {
            width: 75px;
            height: 64px;
            object-fit: cover;
            object-position: center;
        }
    }

    .container_contacts_language {
        width: 100%;
        max-width: 264px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        //gap: 30px;
        
        .language {
            width: 64px;
            height: 24px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            border-radius: 5px;
            background: #111;
            
            button {
                width: 25px;
                font-size: 16px;
                color: #DAEAE1;
                //margin-left: 5px;
            }
            .active {
                position: relative;
                width: 34px;
                height: 30px;
                border: 1px solid #DAEAE1;
                border-radius: 5px;
                background: #DAEAE1;
                color: black;
                
                &.right{
                    left: 4px;
                }
                &.left{
                    left: -4px;
                }
            }
        }
        
        .contact {
            width: 170px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            
            .contact_number_phone, .contact_email {
                display: flex;
                flex-direction: row;
                gap: 12px;

                .email_icon{
                    width: 26px;    
                }
                .phone_icon{
                    width: 26px;
                }
            }
        }
    }
    
    .subheading {
        display: flex;
        flex-direction: row;
        color: #999;
        align-items: center;
        justify-content: center;
    }
`
