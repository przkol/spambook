import { StyledChatWindowsContainer } from "./styled/ChatWindowsContainer.styled";
import { ChatWindow } from "../components/ChatWindow";
import { useSelector } from "react-redux";
export const ChatWindowsContainer=(props)=>{
const{closeChatWindow,openChats} = props
const mainStateChats=useSelector(state=>state.chatReducer)
const mainStateFriends=useSelector(state=>state.friendsReducer.usersList)

let chatWindowsToShow=openChats.map((element,index)=>{

    const chatIndex= mainStateChats.findIndex(chat=>chat.id===element)
    return <ChatWindow friend={mainStateFriends[element]}chat={mainStateChats[chatIndex]} key={index} closeChatWindow={closeChatWindow} />
})
return(
    <StyledChatWindowsContainer>
    {chatWindowsToShow}


    </StyledChatWindowsContainer>
)


}