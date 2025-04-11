import { FC, useState } from 'react'
import { Modal, Row, Col, Typography } from 'antd'
import { useTranslation } from "react-i18next"
import { MainButton } from '@/components'

const { Paragraph } = Typography;
interface ModalProps {
    text_btn: string
    content: string
    images: boolean
    title?: string
    urlImg?: string | undefined
}

const ModalWindow: FC<ModalProps> = ({title, content, text_btn, images, urlImg}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { t } = useTranslation()

    const showModal = () => { setIsModalOpen(true) }

    const handleOk = () => { setIsModalOpen(false) }

    const handleCancel = () => { setIsModalOpen(false) }

    return (
        <>
            <MainButton onClick={showModal}>
                { text_btn }
            </MainButton>
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
                        <MainButton onClick={handleOk} >
                            {t('messages.modal.close')}
                        </MainButton>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ModalWindow


// import { FC, useState } from "react"
// import { Avatar, Button, Modal } from "antd"
// import { UserOutlined } from "@ant-design/icons"
// import { ModalWrapper } from "../Card_Modal.styles.tsx";
//
// interface ModalProps {
//     text_btn: string
//     content: string
//     images: boolean
//     title?: string
//     urlImg?: string | undefined
// }
//
// const ModalWindow: FC<ModalProps> = ({title, content, text_btn, images, urlImg}) => {
//     const [isModalOpen, setIsModalOpen] = useState(false)
//
//     const showModal = () => { setIsModalOpen(true) }
//     const handleOk = () => { setIsModalOpen(false) }
//     const handleCancel = () => { setIsModalOpen(false) }
//
//     return (
//         <ModalWrapper>
//             <div className="card_btn">
//                 <Button type="primary" onClick={showModal} size={'middle'}>
//                     {text_btn}
//                 </Button>
//             </div>
//
//             <Modal title={title}
//                    open={isModalOpen}
//                    onOk={handleOk}
//                    onCancel={handleCancel}
//                    width={800}
//                    footer={(_, { OkBtn }) => ( <OkBtn /> )}>
//                 <div className='modal_container'>
//                     <div className='modal-img'>
//                         { images ? urlImg == undefined ? <Avatar shape="square" size={110} icon={<UserOutlined/>}/> :
//                             <img src={ urlImg } alt={title}/> : ''}
//                     </div>
//
//                     { content }
//                 </div>
//             </Modal>
//         </ModalWrapper>
//     )
// }
//
// export default ModalWindow
