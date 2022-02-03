import { StyledChatWindowsContainer } from "./styled/ChatWindowsContainer.styled";
import { ChatWindow } from "../components/ChatWindow";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export const ChatWindowsContainer = (props) => {
    const { closeChatWindow, openChats } = props
    const mainStateChats = useSelector(state => state.chatReducer)
    const mainStateFriends = useSelector(state => state.friendsReducer.usersList)
    const location = useLocation()
    const chatAppOpenFlag = location.pathname.substring(0, 8) === '/chatter' ? true : false
    const chatWindowsToShow = openChats.map((element, index) => {
        const chatIndex = mainStateChats.findIndex(chat => chat.id === element)
        return <ChatWindow friend={mainStateFriends[element]} chat={mainStateChats[chatIndex]} key={index} index={index} closeChatWindow={closeChatWindow} />
    })
    if (!chatAppOpenFlag) {
        return (
            <StyledChatWindowsContainer>
                {chatWindowsToShow}
            </StyledChatWindowsContainer>
        )
    } else return (<StyledChatWindowsContainer></StyledChatWindowsContainer>)


}