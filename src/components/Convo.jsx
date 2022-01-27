import { StyledConvo } from "./styled/Convo.styled";
import { useDispatch } from "react-redux";
import { ADD_MESSAGE_TO_CHAT} from "../reducers/actions/chatActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { activeTabContext } from "../sections/Chatter";


const MessageBubble=(props)=>{
    const {source,text} = props.message
return(
    <div className='msg'>
    <p className={source==='user'? 'userMsg':'friendMsg'}>{text}</p>
    </div>
)
}
export const Convo=(props)=>{
    const{chatContent,friend}=props
    const isConversationActive=useContext(activeTabContext)
    const messagesToRender=chatContent?.messages.map((message,index)=><MessageBubble key={index} message={message}/>)
    const dispatch=useDispatch()
    const [messageInput,setMessageInput]=useState('')
    const sendMessage=()=>{
        if(messageInput.length>0){
            dispatch(ADD_MESSAGE_TO_CHAT(chatContent.id,'user',messageInput))
            setMessageInput('')} else alert('You cannot send empty messages.')
    }
    console.log(friend)
    console.log('xd')
    console.log(chatContent)

    if(isConversationActive){
        return(
        <StyledConvo>
            <div className="convoHeader">
            <img src={friend?.picture.thumbnail} alt="" />
            <h3>{friend?.name.first+' '+friend?.name.last}</h3>
            </div>
            <div className="messages">
                {messagesToRender}
            </div>
            <div className="messageInput">
                    <label htmlFor='Your message'> <input type='text' placeholder='Aa...' value={messageInput} onChange={(e)=>{setMessageInput(e.target.value)}}/></label>
                    <button onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
        </StyledConvo>
    )} else{
        return(
            <StyledConvo>
            <img className="big" src={friend?.picture.thumbnail} alt="" />

            </StyledConvo>
        )
    }
}