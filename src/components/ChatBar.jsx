import { useContext } from "react";
import { activeChatContext, selectChatFuncContext } from "../sections/Chatter";
import { StyledChatBar } from "./styled/ChatBar.styled";



export const ChatBar=(props)=>{
const{friend,chat} = props
const msgToPreview=chat?.messages[chat.messages.length-1]
const handleChatSelect=useContext(selectChatFuncContext)
const activeChat=useContext(activeChatContext)

    return(
        <StyledChatBar  className={activeChat===chat.id? 'active':''}onClick={()=>{handleChatSelect(chat.id)}}>
                <img src={friend?.picture.thumbnail} alt="" />
            <div className="nameAndPreviewContainer">
                <p className="name">{friend?.name.first+' '+friend?.name.last}</p>
                <p className={msgToPreview?.source==='friend'? 'messagePreview bold':'messagePreview'}>{msgToPreview?.text}</p>
            </div>
        </StyledChatBar>



    )
}