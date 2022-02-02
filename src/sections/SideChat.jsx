import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FriendElement } from "../components/FriendElement"
import { StyledSideChat } from "./styled/SideChat.styled"



const SideChat = (props) => {
    const friendsState = useSelector(state => state.friendsReducer)
    const [searchValue, setSearchValue] = useState('')
    const [usersToShow, setUsersToShow] = useState([])
    const handleSearchInput = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }


    useEffect(() => {
        const checkFriendName = (friend) => {
            const friendName = (friend.name.first + ' ' + friend.name.last).toLowerCase()
            if (friendName.includes(searchValue.toLowerCase())) return true
            else return false
        }
        if (friendsState.usersListLoadedFlag && searchValue !== '') {
            const friendsList = friendsState.usersList.filter(checkFriendName)
            setUsersToShow(friendsList)
        } else if (friendsState.usersListLoadedFlag) { setUsersToShow(friendsState.usersList) }
    }, [friendsState, friendsState.usersList, friendsState.usersListLoadedFlag, searchValue])

    const usersListToShow = usersToShow.map((element, index) =>
        <FriendElement
            key={index}
            id={index}
            friendName={element.name.first + ' ' + element.name.last}
            friendImage={element.picture.thumbnail}
        />)

    return (
        <StyledSideChat>
            <h3> Contacts</h3>
            <input onChange={handleSearchInput} type="text" value={searchValue} placeholder="Search contacts" />
            <div className='friendsList'>
                {usersListToShow}
            </div>
        </StyledSideChat>
    )


}

export default SideChat;