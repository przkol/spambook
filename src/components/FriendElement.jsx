import { StyledFriendElement } from "../sections/styled/FriendElement.styled"

export const FriendElement=(props)=>{
    const {friendName,friendImage} = props

    return(
        <StyledFriendElement>
            <img className='friendPic' src={friendImage} alt={friendName + `'s profile picture`}/>
            <p className='friendName'>{friendName}</p>
            <span></span>

        </StyledFriendElement>)

}