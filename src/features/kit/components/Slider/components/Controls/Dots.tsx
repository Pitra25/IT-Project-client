import { type FC, useContext } from "react";
import { SliderContext } from "../../";
import Dot from "./Dot";

const Dots: FC = () => {
    const { slidesCount }: any = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    };

    return <div className="dots">{renderDots()}</div>;
}

export default Dots