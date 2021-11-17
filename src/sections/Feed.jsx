import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import { fetchJoke } from "../reducers/actions/jokeActions"
import PhotoPost from "../components/PhotoPost"

const Feed=()=>{
const [postsToShow,setPostsToShow]=useState([])
const [postsToRender,setPostsToRender]=useState([])
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)
const stateJoke=useSelector(state =>state.jokeReducer)
const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
const jokeReactions=['ROFL','hahahaha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic you!` ]
const contentPicker=()=>{
    const randomizer=Math.floor(Math.random()*20)
    if(randomizer<10){ 
        return dispatch(fetchJoke)}
    else if(randomizer>=10){ 
        return dispatch(fetchPhoto)}
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
    comments:comments 
}
    :
    {friend:stateRandomUser[Math.floor(Math.random()*20)],
    photo:statePhoto,
    type:'photo',
    comments:comments
    }
    console.log(newPost)
    postsArray.unshift(newPost)



    // if(type==='joke'){
    //     const newPost={
    //         friend:stateRandomUser[Math.floor(Math.random()*20)],
    //         joke:stateJoke,
    //         type:'joke'
    //     }
    //     postsArray.unshift(newPost)
    // }
    // else if(type==='photo'){
    //     const newPost={
    //         friend:stateRandomUser[Math.floor(Math.random()*20)],
    //         photo:statePhoto,
    //         type:'photo'
    //     }
    //     postsArray.unshift(newPost)
    // }
    // else return
    setPostsToShow(postsArray)
    const renderedPosts=postsToShow.map((element,index)=>
    <PhotoPost friend={element.friend}
    joke={element.joke}
    photo={element.photo}
    type={element.type}
    key={index}
    index={index}
    comments={element.comments}/>)
    setPostsToRender(renderedPosts)


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
