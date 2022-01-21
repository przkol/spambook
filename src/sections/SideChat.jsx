import { useState, useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { FriendElement } from "../components/FriendElement"
import { fetchFriendsList } from "../reducers/actions/friendsActions"
import { StyledSideChat } from "./styled/SideChat.styled"
import { connect } from "react-redux"


const SideChat=(props)=>{
    const {openChatWindow}=props
    const usersListState = useSelector(state =>state.friendsReducer)
    const dispatch=useDispatch()
        


    const usersListToShow=usersListState.usersList.map((element,index)=>
    <FriendElement
    key={index}
    friendName={element.name.first+' '+element.name.last}
    friendImage={element.picture.thumbnail}
    openChat={()=>{openChatWindow(element.name.first+' '+element.name.last)}}
    />)   

    return(
        <StyledSideChat>
        <h3> Contacts</h3>

        <div className='friendsList'>
        {usersListToShow}
        </div>
        </StyledSideChat>
    )


    }
  
  export default SideChat;