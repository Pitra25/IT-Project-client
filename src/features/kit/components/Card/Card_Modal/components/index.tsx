import { FC, useState } from 'react'
import { Modal, Row, Col, Typography } from 'antd'
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
                        {/*<MainButton onClick={handleOk} >*/}
                        {/*    {t('messages.modal.close')}*/}
                        {/*</MainButton>*/}
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ModalWindow
