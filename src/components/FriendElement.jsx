import { StyledFriendElement } from "./styled/FriendElement.styled"

export const FriendElement=(props)=>{
    const {friendName,friendImage,openChat} = props

    return(
        <StyledFriendElement onClick={()=>{return openChat(friendName)}}>
            <img className='friendPic' src={friendImage} alt={friendName + `'s profile picture`}/>
            <p className='friendName'>{friendName}</p>
            <span></span>

        </StyledFriendElement>)

}