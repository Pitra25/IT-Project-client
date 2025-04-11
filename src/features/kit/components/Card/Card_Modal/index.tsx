import { type FC } from 'react'
import { useTranslation } from "react-i18next"
import ModalWindow from "./components"
import { Card_ModalWrapper } from "./Card_Modal.styles.tsx"
import { useGetImages } from "@/hooks";

interface cardProps {
    id: string
    content: string
    variant: 'mineCard' | 'linerCard'
    images: boolean
    nameImg: string
    title: boolean
    titleText?: string
}

const Card_Modal: FC<cardProps> = ({ id, title, titleText, content, images, nameImg, variant }) => {
    const { t } = useTranslation()
    let urlImg  = useGetImages(nameImg)

    return (
        <Card_ModalWrapper>
            <div className={variant}>
                <div id={id} className='content'>
                    <div className='card-img'>
                        { images ? <img src={ urlImg } alt={ titleText }/> : ''}
                    </div>
                    <div className='card-content'>
                        { title ?
                            <div className='name'>
                                <span> { titleText } </span>
                            </div> : ''
                        }

                        <div className='content_text'>
                            <span> { content } </span>
                        </div>

                        <ModalWindow images={ images }
                                     content={ content }
                                     urlImg={ urlImg }
                                     title={ titleText }
                                     text_btn={ t('messages.modal.text_btn') } />
                    </div>
                </div>
            </div>
        </Card_ModalWrapper>
    )
}

export default Card_Modal
