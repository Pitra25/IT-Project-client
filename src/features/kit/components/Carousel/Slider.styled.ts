import styled from 'styled-components'

export const SliderWrapper = styled.div`
    /* Основной контейнер */

    .carousel {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    /* Контейнер слайдов */

    .slidesContainer {
        display: flex;
        height: 100%;
        transition: transform 500ms ease-out;
    }

    /* Отдельный слайд */

    .slide {
        width: 100%;
        flex-shrink: 0;
        height: 100%;
    }

    /* Кнопки навигации */

    .controlButton {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        border: none;
        border-radius: 50%;
        padding: 12px;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
        transition: opacity 300ms, background-color 200ms;
    }

    .controlButton:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .controlButton:focus {
        outline: none;
        box-shadow: 0 0 0 2px white;
    }

    .prevButton {
        left: 16px;
    }

    .nextButton {
        right: 16px;
    }

    /* Контейнер показывает кнопки при наведении */

    .carousel:hover .controlButton {
        opacity: 1;
    }

    /* Индикаторы (точки) */

    .dotsContainer {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: rgba(180, 51, 51, 0.5);
        border: none;
        cursor: pointer;
        padding: 0;
        transition: all 300ms;
    }

    .dot:hover {
        background-color: rgba(255, 255, 255, 0.75);
    }

    .activeDot {
        background-color: white;
        width: 24px;
    }

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