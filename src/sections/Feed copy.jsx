import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import { fetchJoke } from "../reducers/actions/jokeActions"
import PhotoPost from "../components/PhotoPost"

const Feed=()=>{
const [post,setPost]=useState()
const [postsToShow,setPostsToShow]=useState([])
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)
const stateJoke=useSelector(state =>state.jokeReducer)

const contentPicker=()=>{
    const randomizer=Math.floor(Math.random()*20)
    if(randomizer<10){ 
        console.log('daje żart')
        return dispatch(fetchJoke)}
    else if(randomizer>=10){ 
        console.log('daje kota')
        return dispatch(fetchPhoto)}
}


const generateFeed=(type)=>{
console.log('generuje')
const postsArray=postsToShow
    if(type==='joke'){console.log('zaczyna żartować')
        const newPost={
            friend:stateRandomUser[Math.floor(Math.random()*20)],
            joke:stateJoke,
            type:'joke'
        }
        postsArray.unshift(newPost)
    }
    else if(type==='photo'){console.log('zaczyna kota')
        const newPost={
            friend:stateRandomUser[Math.floor(Math.random()*20)],
            photo:statePhoto,
            type:'photo'
        }
        postsArray.unshift(newPost)
    }
    else console.log('nic')
    console.log(postsArray)
    setPostsToShow(postsArray)
    console.log(postsToShow)
    const renderedPosts=postsToShow.map((element,index)=>
    <PhotoPost friend={element.friend}
    joke={element.joke}
    photo={element.photo}
    type={element.type}
    key={index}/>) 
    setPostsToRender(renderedPosts)


    // const timer = setTimeout(contentPicker,7500)


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




// useEffect(()=>{
//    generateFeed('photo')
// },[statePhoto])

// useEffect(()=>{
//     generateFeed('joke')
//  },[stateJoke])

// const handleClick=()=>{
//     dispatch(fetchPhoto)
//  }
// const handleClick2=()=>{
//     dispatch(fetchJoke)
//  }


 


    return(
        <StyledFeed>
        {postsToRender}
        </StyledFeed>
    )
}

export default Feed
