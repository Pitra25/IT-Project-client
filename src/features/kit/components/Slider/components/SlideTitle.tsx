import { type FC } from "react";

interface SlideTitleProps {
    title: string
}

const SlideTitle: FC<SlideTitleProps> = ({ title }) => {
    return <div className="slide-title">{title}</div>;
}

export default SlideTitle