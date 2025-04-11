import { type FC, useContext } from "react";
import { SliderContext } from "../../";

interface DotProps {
    number: number
}

const Dot: FC<DotProps> = ({ number }) => {
    const { goToSlide, slideNumber }: any = useContext(SliderContext);

    return (
        <div
            className={`dot ${slideNumber === number ? "selected" : ""}`}
            onClick={() => goToSlide(number)}
        />
    )
}

export default Dot