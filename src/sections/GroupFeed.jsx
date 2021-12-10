import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState} from "react"
import PhotoPost from "../components/PhotoPost"
import { COMMENT_POST, LIKE_POST,SHOW_POST_COMMENTS } from "../reducers/actions/postActions"
import { connect } from "react-redux"
import { useEffect } from "react"
const Feed=(props)=>{
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
const statePosts=useSelector(state =>state.postReducer.posts)
const mainUserState = useSelector(state =>state.mainUserReducer)
const targetGroup=props.groups.findIndex(element=>element.groupID===Number(props.groupIdToShow))
const groupToProcess = useSelector(state =>state.groupsReducer.groups[targetGroup])
const [groupPosts,setGroupPosts] = useState(groupToProcess.posts)
const groupPostsFromState=groupToProcess.posts.length

const createPostsToRender=()=>{
    // console.log(props.groups[targetGroup].posts)
    const mappedPosts=groupPosts.posts.map((element,index)=>
        <PhotoPost user={element.user}
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
        addComment={value=>addMainUserComment(value)}
        />
        )

    setPostsToRender(mappedPosts)
}
const addMainUserComment=([commentText,index])=>{
    const postIndex=index
    dispatch(COMMENT_POST(postIndex,commentText,mainUserState.userInfo))

}

const handleCommentsToggle=(e)=>{
    e.preventDefault()
    const postIndex=e.target.parentNode.getAttribute('index')
    const postToToggle = statePosts[postIndex]
    postToToggle.showComments=!postToToggle.showComments
    dispatch(SHOW_POST_COMMENTS(postIndex,postToToggle))
    createPostsToRender()

}

const handleLikeToggle=(e)=>{
    e.preventDefault()
    const postIndex=e.target.parentNode.getAttribute('index')
    const postToLike = statePosts[postIndex]
    postToLike.liked=!postToLike.liked
    dispatch(LIKE_POST(postIndex,postToLike))
    createPostsToRender()
}

useEffect(()=>{
    console.log(groupPostsFromState)
},[groupPostsFromState])

    return(
        <StyledFeed>
            {postsToRender}
        </StyledFeed>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        groups: state.groupsReducer.groups
    };
}


export default connect(mapStateToProps)(Feed);
