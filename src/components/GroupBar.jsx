import { NavLink } from "react-router-dom";
import { StyledGroupBar } from "./styled/GroupBar.styled";



export const GroupBar = (props) => {
    const { group } = props
    let unreadPosts = group.posts.filter(post => !post.seenByUser)
    return (
        <StyledGroupBar >
            <NavLink to={`/groups/${group.groupId}`}>
                <p> {group.groupName}</p>
                {unreadPosts.length > 0 ? <span>{unreadPosts.length}</span> : null}
            </NavLink>
        </StyledGroupBar>
    )



}