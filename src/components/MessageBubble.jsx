import { useContext } from "react"
import { imgHandler } from "../App"
import { StyledMessageBubble } from "./styled/MessageBubble.styled"

export const MessageBubble = (props) => {
    const { source, text, image } = props.message
    const openFullImg = useContext(imgHandler)
    return (
        <StyledMessageBubble>
            <div className={source === 'user' ? 'userMsg' : 'friendMsg'}>
                {text ? <p>{text}</p> : null}
                {image ? <img src={image} alt="" className='msgImg' onClick={() => openFullImg(image)} /> : null}
            </div>
        </StyledMessageBubble>
    )
}
