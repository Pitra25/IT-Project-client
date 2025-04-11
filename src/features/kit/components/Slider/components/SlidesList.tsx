import { type FC, useContext } from "react"
import Slide from "./Slide";
import { SliderContext } from "../";

const SlidesList: FC = () => {
    const { slideNumber, items }: any = useContext(SliderContext);

    return (
        <div
            className="slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map((slide: any, index: number) => (
                <Slide key={index} data={slide} />
            ))}
        </div>
    )
}

export default SlidesList