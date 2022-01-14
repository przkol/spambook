import { StyledGroupFeed } from "./styled/GroupFeed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useContext, useState} from "react"
import Post from "../components/Post"
import { COMMENT_POST, LIKE_POST } from "../reducers/actions/postActions"
import { connect } from "react-redux"
import { useEffect } from "react"
import { SET_SEEN_STATUS } from "../reducers/actions/groupsActions"



const GroupFeed=(props)=>{
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
const mainUserState = useSelector(state =>state.mainUserReducer)
const groupPosts=props.groupIdToShow==='1'?
        props.groupState.tradePosts
        :props.groupState.footballPosts
        console.log('group')


const createPostsToRender=()=>{
    const mappedPosts=groupPosts.map((element,index)=>
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
    const postToToggle = groupPosts[postIndex]
    postToToggle.showComments=!postToToggle.showComments
    createPostsToRender()

}

const handleLikeToggle=(e)=>{
    e.preventDefault()
    const postIndex=e.target.parentNode.getAttribute('index')
    const postToLike = groupPosts[postIndex]
    postToLike.liked=!postToLike.liked
    dispatch(LIKE_POST(postIndex,postToLike))
    createPostsToRender()
}
useEffect(()=>{
    createPostsToRender()
},[props.groupState,props.groupIdToShow])

useEffect(()=>{
    dispatch(SET_SEEN_STATUS(props.groupIdToShow))

},[props.groupIdToShow])

    return(
        <StyledGroupFeed>
            {postsToRender}
        </StyledGroupFeed>
    )
}
const mapStateToProps = (state, ownProps) => {

    return {
        groupState:state.groupsReducer
    };
}


export default connect(mapStateToProps)(GroupFeed);
