import { useSelector } from "react-redux";
import { ChatBar } from "./ChatBar";
import { StyledChatList } from "./styled/ChatList.styled";



export const ChatList=(props)=>{
    const mainChatState=useSelector(state=>state.chatReducer)
    const mainFriendsState=useSelector(state=>state.friendsReducer)
    const chatBarsToRender=mainChatState.map((chat,index)=><ChatBar key={index} friend={mainFriendsState.usersList[chat.id]} chat={chat}/>)

    return(
        <StyledChatList>
        {chatBarsToRender}
        </StyledChatList>



    )
}