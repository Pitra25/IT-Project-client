import { FC } from "react"

import SlideTitle from "./SlideTitle"
import SlideImage from "./SlideImage.tsx"

interface SlideProps {
    data: {
        url: string
        title: string,
    },
}

const Slide: FC<SlideProps> = ({ data }) => {
    return (
        <div className="slide">
            <SlideImage src={data.url} alt={data.title} />
            <SlideTitle title={data.title} />
        </div>
    )
}

export default Slide