import { StyledFriendElement } from "./styled/FriendElement.styled"
import { openChatFunction } from "../App"
import { useContext } from "react"
export const FriendElement=(props)=>{
    const {friendName,friendImage,id} = props
    const openChatWindow=useContext(openChatFunction)
    return(
        <StyledFriendElement onClick={()=>openChatWindow(id)}>
            <img className='friendPic' src={friendImage} alt={friendName + `'s profile picture`}/>
            <p className='friendName'>{friendName}</p>
            <span></span>

        </StyledFriendElement>)

}