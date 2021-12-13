import { StyledSideNav } from "./styled/SideNav.styled";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { GroupBar } from "../components/GroupBar";

const SideNav=(props)=>{

return(
    <StyledSideNav>
        <NavLink  to={'/'} >Main page</NavLink>
        <NavLink  to={'/user'} >User panel</NavLink>
        <div className="groupLinkContainer">
            <NavLink  to={'/groups'} >Groups</NavLink>
            <GroupBar groupPath={`/groups/`+props.groups.groups[0].groupID} 
                groupName={props.groups.groups[0].groupName}
                postsNum={props.unseenTradePostsCounter} />
            <GroupBar groupPath={`/groups/`+props.groups.groups[1].groupID} 
                groupName={props.groups.groups[1].groupName}
                postsNum={props.unseenFootballPostsCounter} />

        </div>
        <NavLink  to={'/events'} >Events</NavLink>




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