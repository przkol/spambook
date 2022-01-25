import { useState } from "react";
import { StyledChatWindow } from "./styled/ChatWindow.styled";
import { ADD_MESSAGE_TO_CHAT, SET_MESSAGES_SEEN } from "../reducers/actions/chatActions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize,faTimes,faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const MessageBubble=(props)=>{
    const {source,text} = props.message

return(
    <div className='msg'><p className={source==='user'? 'userMsg':'friendMsg'}>{text}</p></div>
)
}

export const ChatWindow=(props)=>{
    const {id,unreadMsg,messages}=props.chat
    const{friend}=props
    const {closeChatWindow} = props
    const dispatch=useDispatch()
    const [messageInput,setMessageInput]=useState('')
    const [chatWindowVisible,setChatWindowVisible]=useState(true)
    const sendMessage=()=>{
        dispatch(ADD_MESSAGE_TO_CHAT(id,'user',messageInput))
        setMessageInput('')
    }

    const setSeenMessages=()=>{
        dispatch(SET_MESSAGES_SEEN(id))
    }
    const messagesToRender=messages.map((message,index)=><MessageBubble key={index} message={message}/>)
    const toggleChatWindowVisibility=()=>{
        setChatWindowVisible((prevState)=>!prevState)
     }
    return(
        <StyledChatWindow  onClick={setSeenMessages}>
            <div className={chatWindowVisible?'chatWindowOpened':'chatWindowBubble'}>
                <div className="chatBubble" onClick={chatWindowVisible?null:toggleChatWindowVisibility}>
                    <img className='friendPic' src={friend?.picture.thumbnail} alt={friend?.name.first+ `'s profile picture`}/>
                    {unreadMsg ? <h4>{unreadMsg}</h4>:null}
                </div>
            <div className="windowHeader" >
                <img className='friendPic' src={friend?.picture.thumbnail} alt={friend?.name.first+ `'s profile picture`}/>
                <h3>{friend?.name.first+' '+friend?.name.last} </h3> <h4>{unreadMsg ? `(${unreadMsg})`:null}</h4>
                <div className="buttons">
                    <button onClick={toggleChatWindowVisibility}><FontAwesomeIcon icon={faWindowMinimize} /></button>
                    <button onClick={()=>closeChatWindow(id)}><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                </div>
                <div className="messages">
                    {messagesToRender}
                    </div>
                <div className="messageInput">
                    <label htmlFor='Your message'> <input type='text' placeholder='Aa...' value={messageInput} onChange={(e)=>{setMessageInput(e.target.value)}}/></label>
                    <button onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
                    </div>
        </StyledChatWindow>
    )
    }