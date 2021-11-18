import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect, useCallback} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import { fetchJoke } from "../reducers/actions/jokeActions"
import PhotoPost from "../components/PhotoPost"

const Feed=()=>{
const [postsToShow,setPostsToShow]=useState([])
const [postsToRender,setPostsToRender]=useState([])
const [userComment,setUserComment]=useState()
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)
const stateJoke=useSelector(state =>state.jokeReducer)
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
    const renderedPosts=postsToShow.map((element,index)=>
        <PhotoPost friend={element.friend}
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

        commentValue={userComment}
        />)
    setPostsToRender(renderedPosts)
}

const addMainUserComment=([value,index])=>{

    const postIndex=index
    const postsToEdit=postsToShow
    postsToEdit[postIndex].comments.push({person:mainUserState,
    comment:value})
    setPostsToShow(postsToEdit)
    createPostsToRender()
}

const handleCommentsToggle=(e)=>{
    e.preventDefault()
    const postIndex=e.target.parentNode.getAttribute('index')
    const postsToEdit=postsToShow

    postsToEdit[postIndex].showComments=!(postsToEdit[postIndex].showComments)
    setPostsToShow(postsToEdit)
    createPostsToRender()
}

const handleLikeToggle=(e)=>{
    e.preventDefault()
    const postIndex=e.target.parentNode.getAttribute('index')
    const postsToEdit=postsToShow
    
    postsToEdit[postIndex].liked=!(postsToEdit[postIndex].liked)
    setPostsToShow(postsToEdit)
    createPostsToRender()
}

const generateFeed=(type)=>{
    const randomNumber=Math.floor(Math.random()*4+1)
    const comments=[]
    const postsArray=postsToShow
    
    for(let i=0;i<randomNumber;i++){
        const newComment={
            person:stateRandomUser[Math.floor(Math.random()*20)],
            comment: (type==='photo'?
                photoReactions[Math.floor(Math.random()*photoReactions.length)] 
                :
                jokeReactions[Math.floor(Math.random()*jokeReactions.length)] 
            )
        }
        comments.push(newComment)
    }
    const newPost=type==='joke'?
        {friend:stateRandomUser[Math.floor(Math.random()*20)],
        joke:stateJoke,
        type:'joke',
        comments:comments,
        likes: (Math.floor(Math.random()*25)+3),
        liked:false,
        showComments: false
    }
        :
        {friend:stateRandomUser[Math.floor(Math.random()*20)],
        photo:statePhoto,
        type:'photo',
        comments:comments,
        likes: (Math.floor(Math.random()*25)+3),
        liked:false,
        showComments: false
        }

    postsArray.unshift(newPost)
    setPostsToShow(postsArray)
    createPostsToRender()
    const timer = setTimeout(contentPicker,10000)
}

useEffect(()=>{
    contentPicker()
},[dispatch])

useEffect(()=>{
    if(stateJoke&&stateRandomUser[0]){
    generateFeed('joke')}
    else return
},[stateJoke,stateRandomUser])

useEffect(()=>{
    if(statePhoto&&stateRandomUser[0]){
    generateFeed('photo')}
    else return
},[statePhoto,stateRandomUser])

    return(
        <StyledFeed>
        {postsToRender}
        </StyledFeed>
    )
}

export default Feed
