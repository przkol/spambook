import { useSelector } from "react-redux";
import { ChatBar } from "./ChatBar";
import { StyledChatList } from "./styled/ChatList.styled";
import { viewMobileMode } from "../App";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";



export const ChatList=(props)=>{
    const mainChatState=useSelector(state=>state.chatReducer)
    const mainFriendsState=useSelector(state=>state.friendsReducer)
    const mobileModeFlag=useContext(viewMobileMode)
    const chatBarsToRender=mainChatState.map((chat,index)=><ChatBar key={index} friend={mainFriendsState.usersList[chat.id]} chat={chat}/>)
    
    return(
        <StyledChatList>
            {mobileModeFlag? <NavLink  to={'/m/contactlist'} ><FontAwesomeIcon icon={faPlus} /></NavLink>:null}
        {chatBarsToRender}
        </StyledChatList>



    )
}