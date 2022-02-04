import { StyledFriendElement } from "./styled/FriendElement.styled"
import { openChatFunction, viewMobileMode } from "../App"
import { useContext } from "react"
import { useLocation, useNavigate } from "react-router"
export const FriendElement = (props) => {
    const currentPath = useLocation()
    const { friendName, friendImage, id } = props
    const mobileModeFlag = useContext(viewMobileMode)
    const openChatWindow = useContext(openChatFunction)
    const navigate = useNavigate()

    const handleFriendChatClick = () => {
        if (mobileModeFlag) {
            navigate(`/m/chatter/${id}`)
        } else if (currentPath.pathname.substring(0, 8) === '/chatter') {
            navigate(`/chatter/${id}`)
        }
        else openChatWindow(id)
    }

    return (
        <StyledFriendElement onClick={handleFriendChatClick}>
            <img className='friendPic' src={friendImage} alt={friendName + `'s profile picture`} />
            <p className='friendName'>{friendName}</p>
            <span></span>

        </StyledFriendElement>)

}