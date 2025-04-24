import {type FC, useRef, useState} from "react"

import { ModalWrapper } from "./Modal.styled.ts"

interface ModalProps {
    title: string
    content: string
    img_url: string | undefined
    open: boolean
}

const Modal2: FC<ModalProps> = ({title, content, img_url, open}) => {
    const [currentState, setCurrentState] = useState(false)

    const handleCancel = () => { setCurrentState(false) }
    const modalRef = useRef<HTMLDivElement>(null)

    if (currentState != open){
        setCurrentState(open)
        console.log('s')
        console.log(open)
    }
    console.log('=============================')
    console.log('modal2 open: ' + open)
    console.log('modal2 currentState: ' + currentState)

    return(
        <ModalWrapper className={currentState ? "modal display-block" : "modal display-none"} ref={modalRef}>
            <div className="wrapper" >
                <div className="header" onClick={handleCancel}>
                    <span></span>
                    <span></span>
                </div>
                <div className="container">
                    <div className="img_container">
                        <img src={ img_url } alt=""/>
                    </div>
                    <div className="content_container">
                        <div className="title">
                            <span>{ title }</span>
                        </div>
                        <div className="content">
                            <span>{ content }</span>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default Modal2