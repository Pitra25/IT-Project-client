import { type FC } from "react"
import { useTranslation } from "react-i18next"
import { Card_Modal } from "@/components"
import Carousel from "react-multi-carousel"
import { CarouselCardWrapper } from "../Slider.styled.ts"

interface CarouselCardProps {
    itemsCard: {}[]
    title: boolean
 }

const CarouselCard: FC <CarouselCardProps> = ({ itemsCard, title }) => {
    //const { slide, setSlide } = useState([])
    const { t } = useTranslation()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (
         <CarouselCardWrapper>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                centerMode={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {itemsCard.map((item: any) => (
                    // <div key={index} className='slide-content'>
                        <Card_Modal
                            titleText={t(`${item.id}.name`)} title={title}
                            content={t(`${item.id}.content`)} images={item.nameImages}
                            nameImg={item.nameImages} variant={'pictureTitle'}/>
                    // </div>
                ))}
            </Carousel>
         </CarouselCardWrapper>
        // <CarouselCardWrapper>
        //     <div className='brands CarouselCard-carousel' id="brands-carousel">
        //         {items.map((item: any, index) => (
        //             <div key={index} className='slide-content'>
        //                 <Card_Modal
        //                     titleText={t(`${item.id}.name`)} title={title}
        //                     content={t(`${item.id}.content`)} images={item.nameImages}
        //                     nameImg={item.nameImages} variant={'pictureTitle'}/>
        //             </div>
        //         ))}
        //     </div>
        //     <div className='brands CarouselCard-carousel' id="brands-carousel">
        //         {items.map((item: any, index) => (
        //             <div key={index} className='slide-content'>
        //                 <Card_Modal
        //                     titleText={t(`${item.id}.name`)} title={title}
        //                     content={t(`${item.id}.content`)} images={item.nameImages}
        //                     nameImg={item.nameImages} variant={'pictureTitle'}/>
        //             </div>
        //         ))}
        //     </div>
        // </CarouselCardWrapper>
    )
}

export default CarouselCard