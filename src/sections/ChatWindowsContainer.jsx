import { StyledChatWindowsContainer } from "./styled/ChatWindowsContainer.styled";
import { ChatWindow } from "../components/ChatWindow";
import { useSelector } from "react-redux";
export const ChatWindowsContainer=(props)=>{
const{closeChatWindow,openChats} = props
const mainStateChats=useSelector(state=>state.chatReducer)

let chatWindowsToShow=openChats.map((element,index)=>{
    const chatIndex= mainStateChats.findIndex(chat=>chat.friend===element)
    return <ChatWindow chat={mainStateChats[chatIndex]} key={index} closeChatWindow={closeChatWindow} />
})
return(
    <StyledChatWindowsContainer>
    {chatWindowsToShow}


    </StyledChatWindowsContainer>
)


}