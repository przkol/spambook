import { StyledPhotoPost } from "./styled/PhotoPost.styled";
import { useSelector } from "react-redux";
import { useState,useEffect, createRef } from "react";
import { Comment } from "./Comment";


const PhotoPost = (props)=>{
const {friend, photo, type,joke,comments, likes,liked,showComments, handleCommentsToggle,handleLike,addComment,} = props
const friendName = friend?.name ? friend.name.first + ' ' + friend.name.last : 'Jan Kowalski'
const friendImage=friend?.picture.thumbnail
const commentsToRender=comments.map((element,index)=><Comment key={index} person={element.person} comment={element.comment}/>)
const mainUserState = useSelector(state =>state.mainUserReducer)
const [userComment,setUserComment]=useState('')


const handleChange=(e)=>{
const value = e.target.value
setUserComment(value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    const value=userComment
    setUserComment('')
    return addComment([value,props.index])

}


return(
    <StyledPhotoPost >
        <div className='postHeader'>
            <img src={friendImage} alt={friendName + `'s profile picture`} /> 
            <p><span>{friendName} </span>{type==='photo' ? 'added a photo!':'added a post!'}</p>
            </div>
        <div className='postContent'>
            <p>{type==='photo' ? 'Check out this cute cat!':'HAHA, check this out:'}</p><br/>
            {type==='photo'? <img className='postedPhoto' src={photo} alt='cat'/>:null}
            {type==='joke'&&joke.type==='twopart' ? <p>{'- '+joke.setup}<br/>{'- '+joke.delivery}</p>:null}
            {type==='joke'&&joke.type==='single' ? <p>{joke.joke}</p>:null}
            </div>
        <div className='reactions'>
            <p>{liked? 'You and ' +likes +' other people liked this' :likes +' people liked this' }</p>
            <p>{comments.length} comments</p>
            </div>
        <div className='actionContainer' index={props.index}>
            <button className={liked? 'liked':null}onClick={handleLike}>Like!</button>
            <button onClick={handleCommentsToggle}>{showComments? "Hide comments": 'Show comments'}</button>
            </div>
        <div className={showComments? null:'invisible'}>
            {commentsToRender}
            <div className='yourComment'>
                <div className='commentHeader'>
                    <img src={mainUserState?.picture?.thumbnail} alt={mainUserState.name + `'s profile picture`} />
                    <p>{mainUserState.name.first +' '+ mainUserState.name.last}</p> 
                    </div>
                    <div className='inputContainer'index={props.index}>
                        <input  onChange={handleChange}  value={userComment} placeholder='Start typing'type='text'/>
                        <button  onClick={handleSubmit}>Submit</button>
                        </div>
                </div>
            </div>
    </StyledPhotoPost>
)

}
export default PhotoPost