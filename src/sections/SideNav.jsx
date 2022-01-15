import { StyledSideNav } from "./styled/SideNav.styled";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { GroupBar } from "../components/GroupBar";
import { ThemeToggler } from "../components/ThemeToggler"

const SideNav=(props)=>{

return(
    <StyledSideNav>
        <NavLink  className='groupLink'to={'/'} >Main page</NavLink>
        <NavLink className='groupLink' to={'/user'} >User panel</NavLink>
        <div className="groupLinkContainer">
            <NavLink className='groupLink' to={'/groups'} >Groups</NavLink>
            <GroupBar groupPath={`/groups/`+props.groups.groups[0].groupID} 
                groupName={props.groups.groups[0].groupName}
                postsNum={props.unseenTradePostsCounter} />
            <GroupBar groupPath={`/groups/`+props.groups.groups[1].groupID} 
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