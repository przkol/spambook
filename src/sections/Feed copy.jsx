import { StyledFeed } from "./styled/Feed.styled"
import { useDispatch,useSelector } from "react-redux"
import { useState, useEffect,useCallback} from "react"
import { fetchPhoto } from "../reducers/actions/photoActions"
import PhotoPost from "../components/PhotoPost"

const Feed=()=>{
const [photo,setPhoto]=useState(false)
const [friend,setFriend]=useState(false)
const [post,setPost]=useState()
const [posts,setPosts]=useState([])
const [postsToShow,setPostsToShow]=useState([])
const dispatch=useDispatch()
const statePhoto = useSelector(state =>state.photoReducer.photoToAdd)
const stateRandomUser = useSelector(state =>state.friendsReducer)

useEffect(()=> {
    dispatch(fetchPhoto)
    // setFriend(stateRandomUser[Math.floor(Math.random()*20)])
    setPhoto(statePhoto)
},[dispatch])

useEffect(()=> {
    setPhoto(statePhoto)
},[statePhoto])

useEffect(()=> {
    setFriend(stateRandomUser[Math.floor(Math.random()*20)])
},[stateRandomUser])

useEffect(()=> {
    let newPost
    if(photo&&friend){
     newPost={
        photo:photo,
        friend:friend
    }
    setPost(newPost)
    }


},[photo,friend])

useEffect(()=> {
    if(post){
    const postsArray = posts
    postsArray.push(post)
    setPosts(postsArray)
   }   
},[post])

// useEffect(()=> {
//     console.log(posts)
//     const postsArray=posts    
//     setPostsToShow(postsArray.map((element,index)=>
//     <PhotoPost friend={element.friend}
//     photo={element.photo}
//     key={index}/>))
//     console.log(postsToShow)
// },[posts]) 

useEffect(()=> {
    const postsArray=posts.map((element,index)=>
            <PhotoPost friend={element.friend}
            photo={element.photo}
            key={index}/>)  

    setPostsToShow(postsArray)
       console.log(postsToShow)
},[posts,post])


useEffect(()=> {
    console.log(postsToShow)

},[posts])


    return(
        <StyledFeed>
            <p>Feed</p>
            {postsToShow}
        </StyledFeed>

    )



}

export default Feed
