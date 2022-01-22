import {useSelector } from "react-redux"
import { FriendElement } from "../components/FriendElement"
import { StyledSideChat } from "./styled/SideChat.styled"



const SideChat=(props)=>{
    const usersListState = useSelector(state =>state.friendsReducer)     

    const usersListToShow=usersListState.usersList.map((element,index)=>
    <FriendElement
    key={index}
    id={index}
    friendName={element.name.first+' '+element.name.last}
    friendImage={element.picture.thumbnail}
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