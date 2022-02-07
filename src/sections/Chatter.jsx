import { createContext, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ChatList } from "../components/ChatList"
import { Convo } from "../components/Convo"
import { StyledChatter } from "./styled/Chatter.styled"
import { useParams } from "react-router"
import { useEffect } from "react"
import { CREATE_NEW_CHAT, SET_MESSAGES_SEEN } from "../reducers/actions/chatActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const activeChatContext = createContext()
export const selectChatFuncContext = createContext()
export const activeTabContext = createContext()
export const toggleActiveTabContext = createContext()

export const Chatter = () => {
  const { id } = useParams()
  const [activeChat, setActiveChat] = useState()
  const [isConversationActive, setIsConversationActive] = useState(true)
  const mainChatState = useSelector(state => state.chatReducer)
  const mainFriendsState = useSelector(state => state.friendsReducer)
  const dispatch = useDispatch()
  let activeChatContent = mainChatState.find(chat => chat.id === activeChat)

  useEffect(() => {
    let chatDoesExist = mainChatState.some(chat => chat.id === (activeChat))
    if (!chatDoesExist && (Boolean(id)) && (activeChat || activeChat === 0)) {
      dispatch(CREATE_NEW_CHAT(activeChat))
    }
  }, [activeChat, dispatch, id, mainChatState])

  useEffect(() => {
    if (id) {
      setActiveChat(Number(id))
    }
  }, [id])




  const handleChatSelect = (targetChat) => {
    setActiveChat(targetChat)
    dispatch(SET_MESSAGES_SEEN(targetChat))
  }

  const handleTabSelect = (target) => {
    if (target === 'conversation') {
      setIsConversationActive(true)
    } else if (target === 'toggle') {
      setIsConversationActive(prevState => !prevState)
    }
  }

  return (
    <activeChatContext.Provider value={activeChat}>
      <toggleActiveTabContext.Provider value={handleTabSelect}>
        <activeTabContext.Provider value={isConversationActive}>
          <selectChatFuncContext.Provider value={handleChatSelect}>
            <StyledChatter >
              <div className={isConversationActive ? "thin chatList" : " chatList"} > <ChatList selectChat={handleChatSelect} /></div>
              <FontAwesomeIcon onClick={() => { handleTabSelect('toggle') }} className={isConversationActive ? 'arrow right' : 'arrow left'} icon={faChevronRight} />
              <div onClick={() => { handleTabSelect() }} className={isConversationActive ? "wide conversation" : "conversation"}>
                {activeChatContent && mainFriendsState.usersList ? <Convo chatContent={activeChatContent} friend={mainFriendsState.usersList[activeChat]} /> : null}
              </div>
            </StyledChatter>
          </selectChatFuncContext.Provider>
        </activeTabContext.Provider>
      </toggleActiveTabContext.Provider>

    </activeChatContext.Provider>
  )


}