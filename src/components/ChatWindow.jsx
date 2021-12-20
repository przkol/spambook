import { StyledChatWindow } from "./styled/ChatWindow.styled";



export const ChatWindow=(props)=>{
console.log(props)
    return(
        <StyledChatWindow>
        <div className="windowHeader">
    <h3>{props.chat.friend}</h3>
    <button>-</button>
    <button onClick={()=>props.closeChat(props.chat.friend)}>X</button>
        </div>
<div className="messages"></div>
<div className="messageInput"></div>

        </StyledChatWindow>
    )
}