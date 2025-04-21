import {type FC, ReactNode, useId} from 'react'
import { useTranslation } from "react-i18next"
import { Card_Modal, Card } from "@/components"
import { CardListWrapper } from "./CardList.styled.tsx"

interface CardProps {
    content: {}[]
    title: boolean
    type: string
    variant: 'mineCard' | 'linerCard'
    direction: 'column' | 'row'
}

const CardList: FC<CardProps> = ({ content, title, type, variant, direction }) => {
    const id: string = useId()
    return (
        <CardListWrapper key={id}>
            <div className={direction}>
                { cardTypeDefinition(content, title, type, variant) }
            </div>
        </CardListWrapper>
    )
}

const cardTypeDefinition = (content: any, title: boolean, type:string, variant: any): ReactNode => {
    const { t } = useTranslation()

    switch (type) {
        case "Card_Modal": {
            return ( content.map((item: any, key: string) => <Card_Modal key={key}
                titleText={t(`${item.id}.name`)} title={title}
                content={t(`${item.id}.content`)} images={item.img}
                nameImg={item.nameImages} variant={variant}/>)
            )
        }
        case "Card": {
            return (
                content.map((item: any, key: any) => <Card key={key} children={item.children} className={item.className}/>)
            )
        }
        default:{
            console.log(new Error("Invalid type: " + type))
        }
    }
}

export default CardList
