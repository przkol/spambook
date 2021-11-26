import { useState } from "react"
import { StyledPostInput } from "./styled/PostInput.styled"



export const PostInput=(props)=>{
    const {mainUser,addUserPost} = props
    const [postText,setPostText]=useState('')
    const [postImage,setPostImage]=useState()

    const handleTextChange=(e)=>{
        setPostText(e.target.value)
    }
    const handleImageUpload=(e)=>{
        if(e.target.files &&e.target.files[0]){
        const image=e.target.files[0]
        setPostImage(URL.createObjectURL(image))
}
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
                <button onClick={()=>{addUserPost(postText,postImage)
                                        setPostImage(null)
                                        setPostText('')}}> Post!</button>
                </div>

                </div>  


        </StyledPostInput>
    )
}