import { StyledGroupFeed } from "./styled/GroupFeed.styled"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import Post from "../components/Post"
import { PostInput } from "../components/PostInput"
import { COMMENT_GROUP_POST, LIKE_GROUP_POST } from "../reducers/actions/groupsActions"
import { useEffect } from "react"
import { SET_SEEN_STATUS } from "../reducers/actions/groupsActions"
import { useParams } from "react-router"
import { GroupHeader } from "../components/GroupHeader"



const GroupFeed = () => {
    const { groupId } = useParams()
    const dispatch = useDispatch()
    const [groupPosts, setGroupPosts] = useState([])
    const mainUserState = useSelector(state => state.mainUserReducer)
    const groupState = useSelector(state => state.groupsReducer)

    const handleCommentsToggle = (e) => {
        e.preventDefault()
        const postIndex = e.target.parentNode.getAttribute('index')
        const postToToggle = groupPosts[postIndex]
        postToToggle.showComments = !postToToggle.showComments
        setGroupPosts([...groupPosts])
    }

    const handleLikeToggle = (e) => {
        e.preventDefault()
        const postIndex = e.target.parentNode.getAttribute('index')
        const postToLike = groupPosts[postIndex]
        postToLike.liked = !postToLike.liked
        dispatch(LIKE_GROUP_POST(groupId, postIndex, postToLike))
    }
    const addMainUserComment = ([commentText, index]) => {
        const postIndex = index
        dispatch(COMMENT_GROUP_POST(groupId, postIndex, commentText, mainUserState.userInfo))
    }
    const mappedPosts = groupPosts.map((element, index) =>
        <Post user={element.user}
            joke={element.joke}
            photo={element.photo}
            type={element.type}
            key={index}
            link={element.matchviewUrl}
            text={element.text}
            index={index}
            comments={element.comments}
            likes={element.likes}
            liked={element.liked}
            showComments={element.showComments}
            handleCommentsToggle={handleCommentsToggle}
            handleLike={handleLikeToggle}
            addComment={value => addMainUserComment(value)}
        />
    )
    useEffect(() => {
        const targetGroup = groupState.groups.find(group => group.groupId === groupId)
        const targetGroupPosts = targetGroup.posts
        setGroupPosts([...targetGroupPosts])
    }, [groupId, groupState.groups])

    useEffect(() => {
        dispatch(SET_SEEN_STATUS(groupId))
    }, [dispatch, groupId])


    return (<>
        <GroupHeader />
        <PostInput target='group' />
        <StyledGroupFeed>
            {mappedPosts}
        </StyledGroupFeed>
    </>
    )
}


export default GroupFeed
