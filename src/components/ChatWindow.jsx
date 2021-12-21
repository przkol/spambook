import { useState } from "react";
import { StyledChatWindow } from "./styled/ChatWindow.styled";
import { ADD_MESSAGE_TO_CHAT } from "../reducers/actions/chatActions";
import { useDispatch } from "react-redux";

const MessageBubble=(props)=>{
    const {source,text} = props.message

return(
    <div className={source==='user'? 'userMsg msg':'friendMsg msg'}><p>{text}</p></div>
)
}

export const ChatWindow=(props)=>{
    console.log(props)
    const dispatch=useDispatch()
    const [messageInput,setMessageInput]=useState('')
    
    const sendMessage=()=>{
        dispatch(ADD_MESSAGE_TO_CHAT(props.chat.friend,'user',messageInput))
        setMessageInput('')
    }

    const messagesToRender=props.chat.messages.map((message,index)=><MessageBubble key={index} message={message}/>)


    return(
        <StyledChatWindow>
        <div className="windowHeader">
    <h3>{props.chat.friend}</h3>
    <button>-</button>
    <button onClick={()=>props.closeChat(props.chat.friend)}>X</button>
        </div>
<div className="messages">
    {messagesToRender}
</div>
<div className="messageInput">
   <label htmlFor='Your message'> <input type='text' placeholder='Aa...' value={messageInput} onChange={(e)=>{setMessageInput(e.target.value)}}/></label>
   <button onClick={sendMessage}>Send</button>
</div>

        </StyledChatWindow>
    )
}