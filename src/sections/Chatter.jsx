import { createContext, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { ChatList } from "../components/ChatList"
import { Convo } from "../components/Convo"
import { StyledChatter } from "./styled/Chatter.styled"
import { useParams } from "react-router"
import { useEffect } from "react"
import { CREATE_NEW_CHAT } from "../reducers/actions/chatActions"

export const activeChatContext=createContext()
export const selectChatFuncContext=createContext()

export const Chatter=()=>{
  const {id}=useParams()
  const [activeChat,setActiveChat]=useState(Number(id))
  const mainChatState=useSelector(state=>state.chatReducer)
  const mainFriendsState=useSelector(state=>state.friendsReducer)
    const numericId=Number(id)
    const dispatch=useDispatch()
  let activeChatContent=mainChatState.find(chat=>chat.id===activeChat)

 
  useEffect(()=>{
    let chatDoesExist=mainChatState.some(chat=>chat.id===(numericId))
    if(!chatDoesExist&&Boolean(numericId)){
      dispatch(CREATE_NEW_CHAT(numericId))}
     
  },[activeChat, dispatch, id, mainChatState, numericId])

  const handleChatSelect=(targetChat)=>{
    setActiveChat(targetChat)
  }
    return(
      <activeChatContext.Provider value={activeChat}>
      <selectChatFuncContext.Provider value={handleChatSelect}>
    <StyledChatter>
        <div className="chatList"> <ChatList selectChat={handleChatSelect}/></div>
        <div className="conversation">{activeChat?<Convo chatContent={activeChatContent}friend={mainFriendsState.usersList[activeChat]}/>:null}</div>
    </StyledChatter>
    </selectChatFuncContext.Provider>
    </activeChatContext.Provider>
  )


}