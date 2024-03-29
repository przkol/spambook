import { useContext } from "react";
import { activeChatContext, selectChatFuncContext } from "../sections/Chatter";
import { StyledChatBar } from "./styled/ChatBar.styled";
import { activeTabContext } from "../sections/Chatter";
import { toggleActiveTabContext } from "../sections/Chatter";

export const ChatBar = (props) => {
    const { friend, chat } = props

    const msgToPreview = chat?.messages?.at(-1)
    const handleChatSelect = useContext(selectChatFuncContext)
    const isConversationActive = useContext(activeTabContext)
    const activeChat = useContext(activeChatContext)
    const toggleActiveTab = useContext(toggleActiveTabContext)

    if (isConversationActive) {
        return (
            <StyledChatBar className={activeChat === chat.id ? 'active' : ''} onClick={() => { handleChatSelect(chat.id) }}>
                <img className='convoActiveImg' src={friend?.picture.thumbnail} alt="" />
                {chat.unreadMsg ? <span className="bubbleSpan">{chat.unreadMsg}</span> : null}
            </StyledChatBar>)

    } else {
        return (
            <StyledChatBar className={activeChat === chat.id ? 'active' : ''} onClick={() => { handleChatSelect(chat.id); toggleActiveTab('conversation') }}>
                <img className='listActiveImg' src={friend?.picture.thumbnail} alt="" />
                <div className="nameAndPreviewContainer">
                    <p className="name">{friend?.name.first + ' ' + friend?.name.last} {chat.unreadMsg ? <span>{chat.unreadMsg}</span> : null}</p>
                    <p className='messagePreview'>{msgToPreview?.text}</p>
                </div>
            </StyledChatBar>
        )
    }
}