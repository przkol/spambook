import { useState } from "react";
import { StyledChatWindow } from "./styled/ChatWindow.styled";
import { ADD_MESSAGE_TO_CHAT, SET_MESSAGES_SEEN } from "../reducers/actions/chatActions";
import { useDispatch } from "react-redux";

const MessageBubble=(props)=>{
    const {source,text} = props.message

return(
    <div className='msg'><p className={source==='user'? 'userMsg':'friendMsg'}>{text}</p></div>
)
}

export const ChatWindow=(props)=>{
    const {friend,unreadMsg,messages}=props.chat
    const {closeChatWindow} = props
    const dispatch=useDispatch()
    const [messageInput,setMessageInput]=useState('')
    const sendMessage=()=>{
        dispatch(ADD_MESSAGE_TO_CHAT(friend,'user',messageInput))
        setMessageInput('')
    }

    const setSeenMessages=()=>{
        dispatch(SET_MESSAGES_SEEN(friend))
    }
    const messagesToRender=messages.map((message,index)=><MessageBubble key={index} message={message}/>)


    return(
        <StyledChatWindow onClick={setSeenMessages}>
            <div className="windowHeader">
                <h3>{friend} {unreadMsg ? `(${unreadMsg})`:null}</h3>
                <div className="buttons">
                    <button>-</button>
                    <button onClick={()=>closeChatWindow(friend)}>X</button>
                    </div>
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