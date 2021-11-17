import { StyledPhotoPost } from "./styled/PhotoPost.styled";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { Comment } from "./Comment";


const PhotoPost = (props)=>{
const {friend, photo, type,joke} = props
const friendName = friend?.name ? friend.name.first + ' ' + friend.name.last : 'Jan Kowalski'
const friendImage=friend?.picture.thumbnail
const [commentsToRender,setCommentsToRender]=useState([])
const stateRandomUser = useSelector(state =>state.friendsReducer)
const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
const jokeReactions=['ROFL','haha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic ${friend.name.first}!` ]
const randomNumber=Math.floor(Math.random()*5+1)
const comments=[]

useEffect(()=>{
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
setCommentsToRender(comments.map((element,index)=><Comment key={index} person={element.person} comment={element.comment}/>))
},[])



return(
    <StyledPhotoPost>
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
            <p>{commentsToRender.length} comments</p>
            </div>
        <div className='actionContainer'>
            <button>Like!</button>
            <button>Show comments</button>
            </div>
        <div className='commentSections'>
        {commentsToRender}
        </div>
    </StyledPhotoPost>
)

}
export default PhotoPost