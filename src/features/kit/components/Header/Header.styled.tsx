import styled from 'styled-components'

export const HeaderStyledWrapper = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    background: ${({theme}) => theme.colors.header.background};
    backdrop-filter: blur(6px);
    z-index: 10;

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
    }

    button:hover {
        text-decoration: none;
    }

    .nav {
        width: 1000px;
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
        width: 250px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .contact {
            display: flex;
            flex-direction: column;
        }
    }

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
        color: #DAEAE1;
        
        button {
            width: 25px;
            font-size: 16px;
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
        }
        .right{
            left: 4px;
        }
        .left{
            left: -4px;
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
