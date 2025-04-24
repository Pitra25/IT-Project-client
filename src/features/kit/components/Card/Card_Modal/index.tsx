import {type FC, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Modal, Row, Col, Typography } from 'antd'
import { useGetImages } from "@/hooks"
import ModalWindow  from "./components"

import {
    MineCardWrapper,
    LinerCardWrapper,
    PictureTitleWrapper,
    RowContentWrapper
} from "./Card_Modal.styles.tsx"

interface cardProps {
    content: string
    variant: 'mineCard' | 'linerCard' | 'pictureTitle' | 'row_content'
    images: boolean
    nameImg: string
    title: boolean
    titleText?: string
}

const Card_Modal: FC<cardProps> = ({ title, titleText, content, images, nameImg, variant }) => {
    const { t } = useTranslation()
    let urlImg  = useGetImages(nameImg)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { Paragraph } = Typography

    const showModal = () => { setIsModalOpen(true) }
    const handleOk = () => { setIsModalOpen(false) }
    const handleCancel = () => { setIsModalOpen(false) }

    const VariantCard = () => {
        switch (variant) {
            case 'mineCard': {
                return(
                    <MineCardWrapper>
                        <div className={variant}>
                            <div className='card_content'>
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
                    </MineCardWrapper>
                )
            }
            case 'linerCard': {
                return(
                    <LinerCardWrapper>
                        <div className={variant}>
                            <div className='card_content'>
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
                    </LinerCardWrapper>
                )
            }
            case 'pictureTitle': {
                return(
                    <PictureTitleWrapper>
                        <div onClick={showModal} className={variant}>
                            <div className='card_content'>
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
                                </div>
                            </div>
                        </div>

                        <Modal
                            title={title}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={800}
                            footer={null}
                        >
                            <Row gutter={2}>
                                <Col span={12}>
                                    { images ? <img src={ urlImg } alt=""/> : ''}
                                </Col>
                                <Col span={12}>
                                    <Paragraph>
                                        { content }
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Modal>
                    </PictureTitleWrapper>
                )
            }
            case 'row_content': {
                return(
                    <RowContentWrapper>
                        <div onClick={showModal} className={variant}>
                            <div className='card_content'>
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
                                </div>
                            </div>
                        </div>

                        <Modal
                            title={title}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={800}
                            footer={null}
                        >
                            <Row gutter={2}>
                                <Col span={12}>
                                    { images ? <img src={ urlImg } alt=""/> : ''}
                                </Col>
                                <Col span={12}>
                                    <Paragraph>
                                        { content }
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Modal>
                    </RowContentWrapper>
                )
            }
        }
    }

    return (
        VariantCard()
    )
}

export default Card_Modal
