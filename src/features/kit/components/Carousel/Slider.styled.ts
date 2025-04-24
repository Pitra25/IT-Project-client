import styled from 'styled-components'

export const CarouselWrapper = styled.div`
    
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
    //height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .carousel_container{
        max-width: 1456px;
        display: flex;
        gap: 32px;
        
        .slides{
            width: 1000%;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            
            .slide{
                width: min-content;
                margin: 20px 16px;
                transition: 500ms ease-out;
            }
        }

        //* Кнопки навигации */

        .controlButton {
            position: relative;
            border: none;
            border-radius: 50%;
            padding: 12px;
            cursor: pointer;
            z-index: 2;
            transition: opacity 300ms, background-color 200ms;
            
            &.prevButton {}
            &.nextButton {
                transform: rotate(-180deg);
            }
        }
    }
`

export const SliderWrapper = styled.div`
    //max-width: 1620px;
    //overflow: hidden;
    ///* Основной контейнер */
    //
    //.carousel {
    //    position: relative;
    //    width: 100%;
    //    overflow: hidden;
    //}
    //
    ///* Контейнер слайдов */
    //
    //.slidesContainer {
    //    width: min-content;
    //    height: 100%;
    //    display: flex;
    //    //justify-content: center;
    //    align-items: center;
    //    gap: 15px;
    //    //transition: transform 500ms ease-out;
    //
    //    &:hover {
    //        animation-play-state: paused;
    //    }
    //}
    //
    ///* Отдельный слайд */
    //
    //.slide {
    //    width: min-content;
    //    height: 100%;
    //    padding: 15px;
    //    flex-shrink: 0;
    //}
    //
    ///* Кнопки навигации */
    //
    //.controlButton {
    //    position: absolute;
    //    top: 50%;
    //    transform: translateY(-50%);
    //    background-color: rgba(0, 0, 0, 0.3);
    //    color: white;
    //    border: none;
    //    border-radius: 50%;
    //    padding: 12px;
    //    cursor: pointer;
    //    z-index: 10;
    //    opacity: 0;
    //    transition: opacity 300ms, background-color 200ms;
    //}
    //
    //.controlButton:hover {
    //    background-color: rgba(0, 0, 0, 0.5);
    //}
    //
    //.controlButton:focus {
    //    outline: none;
    //    box-shadow: 0 0 0 2px white;
    //}
    //
    //.prevButton {
    //    left: 16px;
    //}
    //
    //.nextButton {
    //    right: 16px;
    //}
    //
    ///* Контейнер показывает кнопки при наведении */
    //
    //.carousel:hover .controlButton {
    //    opacity: 1;
    //}
    //
    ///* Индикаторы (точки) */
    //
    //.dotsContainer {
    //    position: absolute;
    //    bottom: 24px;
    //    left: 50%;
    //    transform: translateX(-50%);
    //    display: flex;
    //    gap: 8px;
    //    z-index: 10;
    //}
    //
    //.dot {
    //    width: 12px;
    //    height: 12px;
    //    border-radius: 6px;
    //    background-color: rgb(103, 103, 103);
    //    border: 1px solid rgba(112, 112, 112, 0.58);
    //    cursor: pointer;
    //    padding: 0;
    //    transition: all 300ms;
    //}
    //
    //.dot:hover {
    //    background-color: rgba(152, 152, 152, 0.88);
    //}
    //
    //.activeDot {
    //    width: 24px;
    //}
    //
    //.slider {
    //    overflow: hidden;
    //    position: relative;
    //
    //    & .slide-list {
    //        display: flex;
    //        height: 100%;
    //        transition: transform 0.5s ease-in-out;
    //        width: 100%;
    //
    //        & .slide {
    //            flex: 1 0 100%;
    //            position: relative;
    //
    //            & .slide-image {
    //                display: flex;
    //                margin: 0 auto;
    //                max-height: 300px;
    //                width: 100%;
    //                object-fit: contain;
    //            }
    //
    //            & .slide-title {
    //                text-align: center;
    //                margin-top: 10px;
    //            }
    //        }
    //    }
    //
    //    /* DOTS */
    //
    //    & .dots {
    //        display: flex;
    //        justify-content: center;
    //        padding: 20px 0;
    //        position: relative;
    //        z-index: 2;
    //
    //        & .dot {
    //            background-color: #e7e7e7;
    //            border-radius: 5px;
    //            height: 10px;
    //            margin: 5px;
    //            width: 10px;
    //
    //            &:hover {
    //                cursor: pointer;
    //            }
    //
    //            &.selected {
    //                background-color: green;
    //            }
    //        }
    //    }
    //
    //    /* ARROWS */
    //
    //    & .arrows {
    //        color: white;
    //        display: flex;
    //        font-size: 30px;
    //        justify-content: space-between;
    //        height: 100%;
    //        position: absolute;
    //        top: 30%;
    //        width: 100%;
    //        z-index: 1;
    //
    //        & .arrow {
    //            height: 30px;
    //            width: 30px;
    //
    //            &:hover {
    //                cursor: pointer;
    //            }
    //
    //            &.left {
    //                background-image: url('components/assets/arrow.png');
    //                background-repeat: no-repeat;
    //                background-size: contain;
    //                margin-left: 5px;
    //                transform: rotate(180deg);
    //            }
    //
    //            &.right {
    //                background-image: url('components/assets/arrow.png');
    //                background-repeat: no-repeat;
    //                background-size: contain;
    //                margin-right: 5px;
    //            }
    //        }
    //    }
    //}
`

export const CarouselCardWrapper = styled.div`
    max-width: 1620px;
    height: 400px;


    .carousel-item{
        max-width: 340px;
        margin: 16px;
    }

    .slide-content{
        width: 100%;
    }

    //overflow: hidden;
    //display: -webkit-flex;
    //flex-wrap: nowrap;
    //-webkit-flex-wrap: nowrap;
    //align-items: center;
    //-webkit-align-items: center;

    //.CarouselCard-carousel {
    //    height: 170px;
    //    display: flex;
    //    display: -webkit-flex;
    //    flex-wrap: nowrap;
    //    align-items: center;
    //    -webkit-align-items: center;
    //    animation: animate 60s linear infinite;
    //}
    //.CarouselCard-carousel .slide-content {
    //    height: 100%;
    //    width: auto;
    //    flex: 0 0 auto;
    //    display: flex;
    //    align-items: center;
    //    justify-content: center;
    //    padding: 20px;
    //}
    //.CarouselCard-carousel .slide-content a {
    //    height: 100%;
    //    display: flex;
    //    display: -webkit-flex;
    //    align-items: center;
    //    -webkit-align-items: center;
    //    justify-content: center;
    //    -webkit-justify-content: center;
    //    white-space: nowrap;
    //    color: #808080;
    //    text-transform: uppercase;
    //    padding: 20px;
    //    width: 100%;
    //    transition: all .3s ease-in-out 0s;
    //}
    //.CarouselCard-carousel .slide-content a:hover, .CarouselCard-carousel .slide-content a:active {
    //    box-shadow: 0 0 25px rgba(0,0,0,.15);
    //}
    //
    //&:hover .CarouselCard-carousel {
    //    -webkit-animation-play-state: paused;
    //    -moz-animation-play-state: paused;
    //    -ms-animation-play-state: paused;
    //    -o-animation-play-state: paused;
    //    animation-play-state: paused;
    //}
    //
    //@keyframes animate {
    //    0% {
    //        transform: translate3d(0, 0,0);
    //    }
    //    100% {
    //        transform: translate3d(-100%, 0, 0);
    //    }
    //}
    //@-webkit-keyframes animate {
    //    0% {
    //        transform: translate3d(0, 0,0);
    //    }
    //    100% {
    //        transform: translate3d(-100%, 0, 0);
    //    }
    //}
`