import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        font-family: ${({ theme }) => theme.fonts.noto_sans};
    }
    
    html, body {
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 0;
        padding: 0;

        tab-size: 4;
    }

    /* Медиазапросы для разных размеров экранов */
    //
    ///* Мобильные устройства (портретная ориентация) */
    //@media (max-width: 575.98px) {
    //    html {
    //        width: 100vw;
    //        font-size: 14px;
    //    }
    //
    //    .container {
    //        max-width: 100%;
    //    }
    //
    //    h1 {
    //        font-size: 1.8rem;
    //    }
    //
    //    /* Дополнительные стили для мобильных */
    //    .mobile-hidden {
    //        display: none !important;
    //    }
    //}
    //
    ///* Мобильные устройства (альбомная ориентация) и маленькие планшеты */
    //@media (min-width: 576px) and (max-width: 767.98px) {
    //    .container {
    //        max-width: 540px;
    //    }
    //
    //    h1 {
    //        font-size: 2rem;
    //    }
    //}
    //
    ///* Планшеты */
    //@media (min-width: 768px) and (max-width: 991.98px) {
    //    .container {
    //        max-width: 720px;
    //    }
    //
    //    h1 {
    //        font-size: 2.2rem;
    //    }
    //
    //    .tablet-hidden {
    //        display: none !important;
    //    }
    //}
    //
    ///* Ноутбуки и маленькие десктопы */
    //@media (min-width: 992px) and (max-width: 1199.98px) {
    //    .container {
    //        max-width: 960px;
    //    }
    //
    //    h1 {
    //        font-size: 2.5rem;
    //    }
    //}
    //
    ///* Большие десктопы */
    //@media (min-width: 1200px) {
    //    .container {
    //        max-width: 1140px;
    //    }
    //
    //    h1 {
    //        font-size: 3rem;
    //    }
    //
    //    .desktop-hidden {
    //        display: none !important;
    //    }
    //}
    //
    ///* Очень большие экраны (4K и подобные) */
    //@media (min-width: 1600px) {
    //    .container {
    //        max-width: 1500px;
    //    }
    //
    //    html {
    //        font-size: 18px;
    //    }
    //}
    //
    ///* Особые стили для ландшафтной ориентации на мобильных */
    //@media (max-height: 500px) and (orientation: landscape) {
    //    .landscape-hidden {
    //        display: none !important;
    //    }
    //
    //    body {
    //        font-size: 0.9rem;
    //    }
    //}

`