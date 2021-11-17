import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect,useCallback} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import { fetchJoke } from "../reducers/actions/jokeActions"
import PhotoPost from "../components/PhotoPost"

const Feed=()=>{
const [post,setPost]=useState()
const [posts,setPosts]=useState([])
const [postsToShow,setPostsToShow]=useState([])
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)
const stateJoke=useSelector(state =>state.jokeReducer)



const postTypePicker=()=>{
    const randomizer=Math.floor(Math.random()*10)
        return randomizer
}

const looper=()=>{    
    const randomizer=postTypePicker()
    const timer = setTimeout(()=>{
        if(randomizer<=4){
            console.log('daje kotem', randomizer)
            return dispatch(fetchPhoto)}
        else if(randomizer>4){
            console.log('daje zartem', randomizer)
            return dispatch(fetchJoke)}}
        ,5000)
}

const generateFeed=()=>{
    looper()
    if(post&&posts.length<5){
        const postsArray=posts;
        postsArray.push(post)
        const postsToRender=postsArray.map((element,index)=>
            <PhotoPost friend={element.friend}
            photo={element.photo}
            type={element.type}
            key={index}/>)  
        setPostsToShow(postsToRender)
    setPost()
    }
}

useEffect(()=> {
    const randomizer=postTypePicker()
    if(randomizer<=4){dispatch(fetchPhoto)}
    else if(randomizer>4){dispatch(fetchJoke)}

},[])

useEffect(()=> {
    if(stateRandomUser[0]&&statePhoto){
    setPost({
        friend:stateRandomUser[Math.floor(Math.random()*20)],
        photo:statePhoto,
        type:'photo'
    })
    }
    else if(stateRandomUser[0]&&stateJoke){
        setPost({
            friend:stateRandomUser[Math.floor(Math.random()*20)],
            joke:stateJoke,
            type:'joke'
        })
    }

},[statePhoto,stateRandomUser,stateJoke])

useEffect(()=> {
    if(post){
    generateFeed()}
},[post])

    return(
        <StyledFeed>
            FEEDss
        {postsToShow}
        </StyledFeed>

    )



}

export default Feed
