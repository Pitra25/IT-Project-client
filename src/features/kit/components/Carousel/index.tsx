import { type FC, useRef, useState } from 'react'
import { Card_Modal } from '@/components'
import { useTranslation } from 'react-i18next'

import { CarouselWrapper } from './Slider.styled.ts'

import Arrow from './components/pictures/Icon_arrow.png'

interface CarouselProps {
    items: {}[]
}

const Carousel: FC<CarouselProps> = ({ items }) => {

    const { t } = useTranslation()

    // Refs for DOM elements
    const containerRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    // States
    const [currentPosition, setCurrentPosition] = useState(0)
    const [currentMargin, setCurrentMargin] = useState(0)
    //const [slidesPerPage, setSlidesPerPage] = useState(0)
    // const [slidesCount, setSlidesCount] = useState(0)
    // const [containerWidth, setContainerWidth] = useState(0)
    // const [totalSlides, setTotalSlides] = useState(0)

    const slides = items.length

    // const containerWidth = container.offsetWidth
    // window.addEventListener("resize", () => Params(containerWidth))

    const goToNext = () => {
        if(currentPosition < slides) {
            setCurrentMargin(currentMargin - (100 / 2) )
            setCurrentPosition(currentPosition + 1)

            console.log('Next')
        }
        // setCurrentIndex((prevIndex: number) => prevIndex === items.length - 1 ? 338 : prevIndex + 33 )
    }

    const goToPrev = () => {
        if(currentPosition <= slides && currentPosition != 0) {
            setCurrentMargin(currentMargin + (100 / 2) )
            setCurrentPosition(currentPosition - 1)

            console.log('Prev')
        }
        //setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 338)
    }

    console.log('currentPosition ' + currentPosition)

    // const par = () => {
    //     setSlidesPerPage(4)
    //     setSlidesCount(slides - slidesPerPage)
    //     if (currentPosition > slidesCount) {
    //         setCurrentPosition(currentPosition - slidesPerPage)
    //     }
    //     setCurrentMargin(currentMargin - currentPosition * (100 / slidesPerPage))
    //
    //     console.log('currentMargin: ' + currentMargin + ' ' +
    //         'currentPosition: ' + currentPosition + ' ' +
    //         'slidesPerPage: ' + slidesPerPage + ' ' +
    //         'slidesCount: ' + slidesCount)
    // }

    return (

        <CarouselWrapper ref={containerRef}>
            <div className="carousel_container">

                <button
                    className='controlButton prevButton'
                    onClick={goToPrev}
                    aria-label="Previous slide"
                >
                    <img src={Arrow} alt='arrow picture'/>
                </button>

                <div
                    className="slides"
                    ref={sliderRef}
                >
                    {items.map((item: any, index) => (
                        <div key={index} className='slide'
                              style={{ transform: `translateX(${currentMargin}%)` }}
                        >
                            <Card_Modal
                                titleText={t(`Residents.${item.id}.title`)} title={true}
                                content={t(`Residents.${item.id}.content`)} images={item.nameImages}
                                nameImg={item.nameImages} variant={'pictureTitle'}/>
                        </div>
                    ))}
                </div>

                <button
                    className='controlButton nextButton'
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    <img src={Arrow} alt='arrow picture'/>
                </button>

            </div>
        </CarouselWrapper>
    )
}

export default Carousel


// import { type FC, useState, useEffect, useRef } from 'react'
// import { SliderWrapper } from './Slider.styled.ts'
// import { Card_Modal } from "../Card";
// import { useTranslation } from "react-i18next";
//
// interface CarouselProps {
//     items: {}[]
//     autoPlay?: boolean
//     interval?: number
//     showControls?: boolean
//     showDots?: boolean
// }
//
// const Carousel: FC<CarouselProps> = ({ items, autoPlay = false, interval = 5000,
//                                          showControls = true, showDots = true}) => {
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const [isPaused, setIsPaused] = useState(false)
//     const touchStartX = useRef<number | null>(null)
//     const touchEndX = useRef<number | null>(null)
//     const intervalRef = useRef<NodeJS.Timeout>()
//     const carouselRef = useRef<HTMLDivElement>(null)
//     const { t } = useTranslation()
//
//     const goToNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === items.length - 1 ? 0 : prevIndex + 1
//         )
//     }
//
//     const goToPrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? items.length - 1 : prevIndex - 1
//         )
//     }
//
//     const goToSlide = (index: number) => { setCurrentIndex(index) }
//
//     const handleTouchStart = (e: React.TouchEvent) => {
//         touchStartX.current = e.touches[0].clientX
//     }
//
//     const handleTouchMove = (e: React.TouchEvent) => {
//         touchEndX.current = e.touches[0].clientX
//     }
//
//     const handleTouchEnd = () => {
//         if (!touchStartX.current || !touchEndX.current) return
//
//         const diff = touchStartX.current - touchEndX.current
//         if (diff > 50) { goToNext()
//         } else if (diff < -50) { goToPrev() }
//
//         touchStartX.current = null
//         touchEndX.current = null
//     };
//
//     useEffect(() => {
//         if (autoPlay && !isPaused && items.length > 1) {
//             intervalRef.current = setInterval(goToNext, interval)
//             return () => {
//                 if (intervalRef.current) clearInterval(intervalRef.current)
//             }
//         }
//     }, [autoPlay, interval, isPaused, items.length])
//
//     const handleMouseEnter = () => setIsPaused(true)
//     const handleMouseLeave = () => setIsPaused(false)
//
//     useEffect(() => {
//         if (carouselRef.current && items.length > 0) {
//             const firstSlide = carouselRef.current.querySelector('slide')
//             if (firstSlide) {
//                 carouselRef.current.style.height = `${firstSlide.clientHeight}px`
//             }
//         }
//     }, [items])
//
//
//     return (
//         <SliderWrapper>
//             <div
//                 ref={carouselRef}
//                 className='carousel'
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <div
//                     className='slidesContainer'
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                     onTouchEnd={handleTouchEnd}
//                 >
//                     {items.map((item: any, index) => (
//                         <div key={index} className='slide'>
//                             <Card_Modal
//                                 titleText={t(`${item.id}.name`)} title={true}
//                                 content={t(`${item.id}.content`)} images={item.nameImages}
//                                 nameImg={item.nameImages} variant={'mineCard'}/>
//                         </div>
//                     ))}
//                 </div>
//
//                 { showControls && items.length > 1 && (
//                     <>
//                         <button
//                             className='controlButton prevButton'
//                             onClick={goToPrev}
//                             aria-label="Previous slide"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                             </svg>
//                         </button>
//                         <button
//                             className='controlButton nextButton'
//                             onClick={goToNext}
//                             aria-label="Next slide"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </>
//                 )}
//
//                 {showDots && items.length > 1 && (
//                     <div className='dotsContainer'>
//                         {items.map((_, index) => (
//                             <button
//                                 key={index}
//                                 className={'dot ' + `${index === currentIndex ? 'activeDot' : ''}`}
//                                 onClick={() => goToSlide(index)}
//                                 aria-label={`Go to slide ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </SliderWrapper>
//     )
// }
//
// export default Carousel;
//
