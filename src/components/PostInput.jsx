import { useState } from "react"
import { StyledPostInput } from "./styled/PostInput.styled"
import { ADD_POST } from "../reducers/actions/postActions"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ADD_GROUP_POST } from "../reducers/actions/groupsActions"

export const PostInput=(props)=>{
    const {mainUser} = props
    const mainUserState = useSelector(state =>state.mainUserReducer)
    const [postText,setPostText]=useState('')
    const [postImage,setPostImage]=useState()
    const dispatch=useDispatch()

    const handleTextChange=(e)=>{
        setPostText(e.target.value)
    }
    const handleImageUpload=(e)=>{
        if(e.target.files &&e.target.files[0]){
        const image=e.target.files[0]
        setPostImage(URL.createObjectURL(image))
}
    }

    const addUserPost=()=>{
        const comments=[]
        console.log('xd')
        // for(let i=0;i<10;i++){
        //     const randomNumber=Math.floor(Math.random()*10)
        //     if(randomNumber<=5){
        //     const newComment={
        //         person:stateRandomUser[Math.floor(Math.random()*20)],
        //         comment: 
        //             jokeReactions[Math.floor(Math.random()*jokeReactions.length)] 
                
        //     }
        //     comments.push(newComment)}
        // }
        const userPost ={
            user: mainUserState.userInfo,
            type:'userPost',
            comments:comments,
            photo: postImage,
            text: postText,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments:false
        }
        if(props.target==='mainFeed'){
        dispatch(ADD_POST(userPost))
        } else if(props.target==='group'){
                dispatch(ADD_GROUP_POST(userPost,props.groupIdToShow))
        }

        setPostImage()
        setPostText('')
    }

    return (
        <StyledPostInput>
            <div className='postHeader'>
                <img src={mainUser?.picture?.thumbnail} alt={mainUser?.name?.first + `'s profile picture`} />
                <p>{mainUser?.name?.first+' '+mainUser?.name?.last}</p>               
                </div>
            <div className='inputContainer'>
                <textarea  maxLength='250' className='textContent' value={postText}onChange={handleTextChange}placeholder={`Tell us what you're thinking..`} />
                {postImage? <img src={postImage} alt='upload'/> : null}
                <div className='actionButtonContainer'>
                <label htmlFor='fileInput'>Upload a photo</label>
                <input  id='fileInput' type='file' onChange={handleImageUpload}/>
                <button onClick={addUserPost}> Post!</button>
                </div>

                </div>  


        </StyledPostInput>
    )
}