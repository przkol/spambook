import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { PostInput } from "../components/PostInput"
import Post from "../components/Post"
import { COMMENT_POST, LIKE_POST } from "../reducers/actions/postActions"
import { connect } from "react-redux"
import { useEffect } from "react"
const Feed = (props) => {
    const [postsToRender, setPostsToRender] = useState([])
    const dispatch = useDispatch()
    const statePosts = useSelector(state => state.postReducer.posts)
    const mainUserState = useSelector(state => state.mainUserReducer)


    const createPostsToRender = () => {
        const mappedPosts = props.postsInStore.posts.map((element, index) =>
            <Post userId={element.userId}
                joke={element.joke}
                photo={element.photo}
                type={element.type}
                key={index}
                text={element.text}
                index={index}
                comments={element.comments}
                likes={element.likes}
                liked={element.liked}
                showComments={element.showComments}
                handleCommentsToggle={handleCommentsToggle}
                handleLike={handleLikeToggle}
                addComment={value => addMainUserComment(value)}
            />)
        setPostsToRender(mappedPosts)
    }

    const addMainUserComment = ([commentText, index]) => {
        const postIndex = index
        dispatch(COMMENT_POST(postIndex, commentText, mainUserState.userInfo))

    }

    const handleCommentsToggle = (e) => {
        e.preventDefault()
        const postIndex = e.target.parentNode.getAttribute('index')
        const postToToggle = statePosts[postIndex]
        postToToggle.showComments = !postToToggle.showComments
        createPostsToRender()

    }

    const handleLikeToggle = (e) => {
        e.preventDefault()
        const postIndex = e.target.parentNode.getAttribute('index')
        const postToLike = statePosts[postIndex]
        postToLike.liked = !postToLike.liked
        dispatch(LIKE_POST(postIndex, postToLike))
        createPostsToRender()
    }

    useEffect(() => {
        createPostsToRender()
    },
        [props.postsInStore])

    return (
        <StyledFeed>
            {postsToRender}
            <PostInput target='mainFeed' />

        </StyledFeed>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        postsInStore: state.postReducer
    };
}


export default connect(mapStateToProps)(Feed);
