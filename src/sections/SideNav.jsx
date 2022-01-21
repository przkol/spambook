import { StyledSideNav } from "./styled/SideNav.styled";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { GroupBar } from "../components/GroupBar";
import { ThemeToggler } from "../components/ThemeToggler"
import { viewMobileMode } from "../App";

import { useContext } from "react";
const SideNav=(props)=>{
    const displayMode=useContext(viewMobileMode)
const mobilePaths={main:'/m',userPage:'/m/user',groupsPage:'/m/groups',group1:`/m/groups/1`,group2:`/m/groups/2`}
const desktopPaths={main:'/',userPage:'/user',groupsPage:'/groups',group1:`/groups/1`,group2:`/groups/2`}


    let pathsArray=displayMode?mobilePaths:desktopPaths
return(
    <StyledSideNav>
        <NavLink  className='groupLink'to={pathsArray.main} >Main page</NavLink>
        <NavLink className='groupLink' to={pathsArray.userPage} >User panel</NavLink>
        <div className="groupLinkContainer">
            <NavLink className='groupLink' to={pathsArray.groupsPage} >Groups</NavLink>
            <GroupBar groupPath={pathsArray.group1} 
                groupName={props.groups.groups[0].groupName}
                postsNum={props.unseenTradePostsCounter} />
            <GroupBar groupPath={pathsArray.group2} 
                groupName={props.groups.groups[1].groupName}
                postsNum={props.unseenFootballPostsCounter} />

        </div>
        <NavLink className='groupLink'  to={'/events'} >Events</NavLink>
        <ThemeToggler/>



    </StyledSideNav>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
    groups:state.groupsReducer,
    unseenTradePostsCounter:state.groupsReducer.tradePosts?.filter(element=>!element.seenByUser).length,
    unseenFootballPostsCounter:state.groupsReducer.footballPosts?.filter(element=>!element.seenByUser).length
    };
  }
  
  
  export default connect(mapStateToProps)(SideNav);