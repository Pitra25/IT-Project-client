import { type FC, useEffect, useState, createContext } from "react"

import Arrows from "./components/Controls/Arrows"
import Dots from "./components/Controls/Dots"
import SlidesList from "./components/SlidesList"
import { SliderWrapper } from './Slider.styled.ts'

export const SliderContext = createContext('slider')

interface SliderProps {
    data?: {}[]
    width?: string,
    height?: string,
    autoPlay?: boolean,
    autoPlayTime?: number
}

const getImages = (length = 10) => {
    return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then((response) => response.json())
        .then((response) => {
            const images: any = [];
            response.forEach((c: any) => {
                const title = c?.description;
                const url = c?.image?.url;

                images.push({ title, url });
            });
            return images.slice(0, length); // remove the extra cats
        });
};

const Slider: FC <SliderProps> =  ({ width = '100%', height = '100%', autoPlay = false, autoPlayTime = 5000 }) => {
    const [items, setItems] = useState([])
    const [slide, setSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const images = await getImages();
            setItems(images);
        };
        loadData();
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1
        } else {
            slideNumber = (slide + direction) % items.length
        }

        setSlide(slideNumber)
    }
    const goToSlide = (number: number) => {
        setSlide(number % items.length)
    }
    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e: any) => {
        if (touchPosition === null) return

        const currentPosition = e.touches[0].clientX
        const direction = touchPosition - currentPosition

        if (direction > 10) changeSlide(1)
        if (direction < -10) changeSlide(-1)

        setTouchPosition(null)
    }

    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(() => {
            changeSlide(1)
        }, autoPlayTime)

        return () => clearInterval(interval)
    }, [items.length, slide]) // when images uploaded or slide changed manually we start timer

    return (
        <SliderWrapper>
            <div
                style={{ width, height }}
                className="slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <SliderContext.Provider
                    value={{
                        goToSlide,
                        changeSlide,
                        slidesCount: items.length,
                        slideNumber: slide,
                        items
                    }}
                >
                    <Arrows />
                    <SlidesList />
                    <Dots />
                </SliderContext.Provider>
            </div>
        </SliderWrapper>
    )
}

export default Slider
