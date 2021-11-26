import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import { fetchJoke } from "../reducers/actions/jokeActions"
import PhotoPost from "../components/PhotoPost"
import { ADD_POST, COMMENT_POST, LIKE_POST,SHOW_POST_COMMENTS } from "../reducers/actions/postActions"

const Feed=()=>{
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)
const stateJoke=useSelector(state =>state.jokeReducer)
const statePosts=useSelector(state =>state.postReducer.posts)
const mainUserState = useSelector(state =>state.mainUserReducer)
const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
const jokeReactions=['ROFL','hahahaha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic you!` ]

const contentPicker=()=>{
    const randomizer=Math.floor(Math.random()*20)
    if(randomizer<10){ 
        return dispatch(fetchJoke)}
    else if(randomizer>=10){ 
        return dispatch(fetchPhoto)}
}
const createPostsToRender=()=>{
    const mappedPosts=statePosts.map((element,index)=>
        <PhotoPost user={element.user}
        joke={element.joke}
        photo={element.photo}
        type={element.type}
        key={index}
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

const generateFeed=(type)=>{
    console.log(stateRandomUser)
    const comments=[]
    for(let i=0;i<10;i++){
        const randomNumber=Math.floor(Math.random()*10)
        if(randomNumber<=5){
        const newComment={
            person:stateRandomUser[Math.floor(Math.random()*20)],
            comment: (type==='photo'?
                photoReactions[Math.floor(Math.random()*photoReactions.length)] 
                :
                jokeReactions[Math.floor(Math.random()*jokeReactions.length)] 
            )
        }
        comments.push(newComment)}
    }
    const newPost=type==='joke'?
        {user:stateRandomUser[Math.floor(Math.random()*20)],
        joke:stateJoke,
        type:'joke',
        comments:comments,
        likes: (Math.floor(Math.random()*25)+3),
        liked:false,
        showComments: false
    }
        :
        {user:stateRandomUser[Math.floor(Math.random()*20)],
        photo:statePhoto,
        type:'photo',
        comments:comments,
        likes: (Math.floor(Math.random()*25)+3),
        liked:false,
        showComments: false
        }
        console.log(newPost)
    dispatch(ADD_POST(newPost))
    // setPostsToShow(postsArray)
    createPostsToRender()
    // eslint-disable-next-line no-unused-vars
}

useEffect(()=>{
    contentPicker()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[dispatch])

useEffect(()=>{
const timer = setTimeout(()=>{contentPicker()},7500)
    return()=>{
        clearTimeout(timer)
    }
},[postsToRender])

useEffect(()=>{
    if(stateJoke&&stateRandomUser[0]){
    generateFeed('joke')}
    else return
// eslint-disable-next-line react-hooks/exhaustive-deps
},[stateJoke,stateRandomUser])

useEffect(()=>{
    if(statePhoto&&stateRandomUser[0]){
    generateFeed('photo')}
    else return
// eslint-disable-next-line react-hooks/exhaustive-deps
},[statePhoto,stateRandomUser])

    return(
        <StyledFeed>
        {postsToRender}
        </StyledFeed>
    )
}

export default Feed
