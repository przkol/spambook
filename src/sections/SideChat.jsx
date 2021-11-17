import { useState, useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { FriendElement } from "../components/FriendElement"
import { fetchUsersNames } from "../reducers/actions/friendsActions"
import { StyledSideChat } from "./styled/SideChat.styled"

const SideChat=()=>{
    const [usersList,setUsersList] = useState([])
    const usersListState = useSelector(state =>state.friendsReducer)
    const dispatch=useDispatch()
    
    const usersListToShow=usersList.map((element,index)=>
    <FriendElement
    key={index}
    friendName={element.name.first+' '+element.name.last}
    friendImage={element.picture.thumbnail}
    />)
    useEffect(()=> {
        dispatch(fetchUsersNames)
        },[dispatch])
    
    useEffect(()=>{
        setUsersList(usersListState)
    },[usersListState])

    return(
        <StyledSideChat>
        <h3> Online friends</h3>
        <div className='friendsList'>
        {usersListToShow}
        </div>
        </StyledSideChat>
    )


}

export default SideChat