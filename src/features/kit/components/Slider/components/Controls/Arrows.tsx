import { type FC, useContext } from "react";
import { SliderContext } from "../../";

const Arrows: FC = () => {
    const { changeSlide }: any = useContext(SliderContext);

    return (
        <div className="arrows">
            <div className="arrow left" onClick={() => changeSlide(-1)} />
            <div className="arrow right" onClick={() => changeSlide(1)} />
        </div>
    )
}

export default Arrows