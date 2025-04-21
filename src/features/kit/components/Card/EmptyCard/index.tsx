import {type FC, type ReactNode, useId} from 'react'

import { CardWrapper } from './Card.styled.tsx'

interface Props {
    children: ReactNode
    className?: string
}

const Card: FC<Props> = ({ children, className }) => {
    return (
        <CardWrapper key={useId()} className={className}>
            { children }
        </CardWrapper>
    )
}

export default Card
