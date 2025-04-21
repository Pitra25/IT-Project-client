import styled from 'styled-components'

export const NavStyledWrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.colors.header.background};

    font-family: ${({theme}) => theme.fonts.noto_sans};

    .fontSize {
        font-size: 18px;
        margin-right: 5px;
        color: ${({theme}) => theme.colors.link_text.black};
    }

    .menu-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    @media (width <= 1500px) {
        .menu-list {
            display: none;

            &.active_menu {
                position: absolute;
                width: 150px;
                right: 0;
                top: 110px;
                display: block;
                background: #afafaf;
                padding: 5px;
                
            }
        }

        .burger {
            cursor: pointer;
            display: block;
            position: relative;
            border: none;
            background: transparent;
            width: 40px;
            height: 26px;
            margin: 30px auto;
        }

        .burger::before,
        .burger::after {
            content: '';
            left: 0;
            position: absolute;
            display: block;
            width: 100%;
            height: 4px;
            border-radius: 10px;
            background: #000;
        }

        .burger::before {
            top: 0;
            box-shadow: 0 11px 0 #000;
            transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
        }

        .burger::after {
            bottom: 0;
            transition: bottom .3s .15s, transform .3s;
        }

        .burger.active::before {
            top: 11px;
            transform: rotate(45deg);
            box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
            transition: box-shadow .15s, top .3s, transform .3s .15s;
        }

        .burger.active::after {
            bottom: 11px;
            transform: rotate(-45deg);
            transition: bottom .3s, transform .3s .15s;
        }
    }
`

export const DropdownWrapper = styled.div`
    /* Container for placing dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    /* Dropdown button */
    .dropbtn {
        border: none;
        margin-right: 5px;
        cursor: pointer;
    }
   
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        z-index: 1;
        position: absolute;
        width: max-content;
        display: none;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: all 3s ease;
        background: rgba(124, 124, 124, 0.92);
    }
   
    /* Links inside the dropdown list */
    .dropdown-content a {
        display: block;
        padding: 12px 16px;
        text-decoration: none;
        font-family: ${({ theme }) => theme.fonts.noto_sans};
    }
    
    /* Change color of dropdown links on hover */
    .dropdown-content a:hover { color: ${({ theme }) => theme.colors.link_text.black}; }
   
    /* Show dropdown menu on hover */
    .dropdown:hover .dropdown-content { display: block; }
    
    /* Change the background color of a dropdown button when the dropdown content is displayed */
    .dropdown:hover .dropdown:hover .dropbtn  { background-color: ${({ theme }) => theme.colors.header.background} }

    @media (width <= 1500px) {
        .dropdown-content {
            z-index: 1;
            position: absolute;
            right: 106px;
            top: 0;
            width: 376px;
            display: none;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            transition: all 3s ease;
            background: rgba(124, 124, 124, 0.92);
        }
    }
`

//export const DropdownWrapperNested = styled(DropdownWrapper)``

export const DropdownWrapperNested = styled.div`
    /* Container for placing dropdown content */
    .dropdown-nested {
        position: relative;
        display: inline-block;
    }

    /* Dropdown button */
    .dropbtn-nested {
        padding: 16px;
        border: none;
        cursor: pointer;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content-nested {
        z-index: 1;
        position: absolute;
        width: max-content;
        display: none;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        transition: all 3s ease;
        background: rgba(124, 124, 124, 0.92);
    }

    /* Links inside the dropdown list */
    .dropdown-content-nested a {
        display: block;
        padding: 12px 16px;
        text-decoration: none;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content-nested a:hover { color: ${({ theme }) => theme.colors.link_text.black}; }

    /* Show dropdown menu on hover */
    .dropdown-nested:hover .dropdown-content-nested { display: block; }

    /* Change the background color of a dropdown button when the dropdown content is displayed */
    .dropdown-nested:hover .dropdown-nested:hover .dropbtn-nested  { background-color: ${({ theme }) => theme.background} }
`
