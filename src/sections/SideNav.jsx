import { StyledSideNav } from "./styled/SideNav.styled";
import { NavLink } from "react-router-dom";
import { GroupBar } from "../components/GroupBar";
import { ThemeToggler } from "../components/ThemeToggler"
import { viewMobileMode } from "../App";
import { useContext } from "react";
import { useSelector } from "react-redux";

const SideNav = () => {
    const groupsState = useSelector(state => state.groupsReducer)
    const displayMode = useContext(viewMobileMode)
    const mobilePaths = { main: '/', userPage: '/m/user', groupsPage: '/m/groups', group1: `/m/groups/1`, group2: `/m/groups/2`, chats: '/m/chatter' }
    const desktopPaths = { main: '/', userPage: '/user', groupsPage: '/groups', group1: `/groups/1`, group2: `/groups/2`, chats: '/chatter' }
    let pathsArray = displayMode ? mobilePaths : desktopPaths
    const mappedGroupBars = groupsState.groups.map((group, index) => <GroupBar group={group} unreadPosts={group.posts.filter(post => !post.postSeenByUser)} key={index} />)

    return (
        <StyledSideNav>
            <NavLink className='groupLink' to={pathsArray.main} >Main page</NavLink>
            <NavLink className='groupLink' to={pathsArray.userPage} >User panel</NavLink>
            <NavLink className='groupLink' to={pathsArray.chats} >Chats</NavLink>
            <div className="groupLinkContainer">
                <NavLink className='groupLink' to={pathsArray.groupsPage} >Groups</NavLink>
                {mappedGroupBars}

            </div>
            <ThemeToggler />
        </StyledSideNav>

    )
}

export default SideNav