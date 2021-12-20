import { useState, useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { FriendElement } from "../components/FriendElement"
import { fetchFriendsList } from "../reducers/actions/friendsActions"
import { StyledSideChat } from "./styled/SideChat.styled"
import { connect } from "react-redux"


const SideChat=(props)=>{
    const {openChats,openChatWindow}=props
    const [usersList,setUsersList] = useState([])
    const usersListState = useSelector(state =>state.friendsReducer)
    const dispatch=useDispatch()
        


    const usersListToShow=usersList.map((element,index)=>
    <FriendElement
    key={index}
    friendName={element.name.first+' '+element.name.last}
    friendImage={element.picture.thumbnail}
    openChat={()=>{openChatWindow(element.name.first+' '+element.name.last)}}
    />)
    useEffect(()=> {
        dispatch(fetchFriendsList)
        },[dispatch])
    
    useEffect(()=>{
        setUsersList(usersListState)
    },[usersListState])

    

    return(
        <StyledSideChat>
        <div className='friendsList'>
        <h3> Online friends</h3>

        {usersListToShow}
        </div>
        </StyledSideChat>
    )


    }
  
  export default SideChat;