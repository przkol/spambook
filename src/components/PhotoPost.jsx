import { StyledPhotoPost } from "./styled/PhotoPost.styled";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { Comment } from "./Comment";


const PhotoPost = (props)=>{
const {friend, photo, type,joke,comments} = props
const friendName = friend?.name ? friend.name.first + ' ' + friend.name.last : 'Jan Kowalski'
const friendImage=friend?.picture.thumbnail
const commentsToRender=comments.map((element,index)=><Comment key={index} person={element.person} comment={element.comment}/>)
const stateRandomUser = useSelector(state =>state.friendsReducer)

const handleLike=(e)=>{
    e.preventDefault()
    console.log(e.target.parentNode.getAttribute('index'))
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
            <p>{Math.floor(Math.random()*25)+3} people liked this </p>
            <p>{comments.length} comments</p>
            </div>
        <div className='actionContainer' index={props.index}>
            <button onClick={handleLike}>Like!</button>
            <button>Show comments</button>
            </div>
        <div className='commentSections'>
        {commentsToRender}
        </div>
    </StyledPhotoPost>
)

}
export default PhotoPost