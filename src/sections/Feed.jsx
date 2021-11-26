import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState} from "react"

import PhotoPost from "../components/PhotoPost"
import { ADD_POST, COMMENT_POST, LIKE_POST,SHOW_POST_COMMENTS } from "../reducers/actions/postActions"
import { PostInput } from "../components/PostInput"
import { connect } from "react-redux"
import { useEffect } from "react"
const Feed=(props)=>{
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
// const stateRandomUser = useSelector(state =>state.friendsReducer)
const statePosts=useSelector(state =>state.postReducer.posts)
const mainUserState = useSelector(state =>state.mainUserReducer)
// const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
// const jokeReactions=['ROFL','hahahaha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic you!` ]


const createPostsToRender=()=>{
    const mappedPosts=props.postsInStore.posts.map((element,index)=>
        <PhotoPost user={element.user}
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
        addComment={value=>addMainUserComment(value)}
        />)
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
    createPostsToRender()

},
[props.postsInStore])

// const addUserPost=(postText, postPicture)=>{
//     const comments=[]
//     for(let i=0;i<10;i++){
//         const randomNumber=Math.floor(Math.random()*10)
//         if(randomNumber<=5){
//         const newComment={
//             person:stateRandomUser[Math.floor(Math.random()*20)],
//             comment: 
//                 jokeReactions[Math.floor(Math.random()*jokeReactions.length)] 
            
//         }
//         comments.push(newComment)}
//     }
//     const userPost ={
//         user: mainUserState.userInfo,
//         type:'userPost',
//         comments:comments,
//         photo: postPicture,
//         text:postText,
//         likes: (Math.floor(Math.random()*25)+3),
//         liked:false,
//         showComments:false
//     }
//     dispatch(ADD_POST(userPost))
//     createPostsToRender()
// }

    return(
        <StyledFeed>
        
        {postsToRender}
        <button onClick={createPostsToRender}>assadsdfasfd</button>
        </StyledFeed>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        postsInStore: state.postReducer
    };
}


export default connect(mapStateToProps)(Feed);