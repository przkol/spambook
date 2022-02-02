import { StyledPost } from "./styled/Post.styled";
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import { Comment } from "./Comment";
import { imgHandler } from "../App";
import { useNavigate } from "react-router";

const Post = (props) => {
    const { userId, text, photo, comments, likes, liked, showComments, handleCommentsToggle, handleLike, addComment } = props
    const mainUserState = useSelector(state => state.mainUserReducer)
    const friendState = useSelector(state => state.friendsReducer)
    const user = userId === 'mainUser' ? mainUserState.userInfo : friendState?.usersList[userId]
    const userName = user?.name ? user.name.first + ' ' + user.name.last : null
    const userProfilePicture = user?.picture.thumbnail
    const commentsToRender = comments.map((element, index) => <Comment key={index} person={element.person} comment={element.comment} />)
    const [userComment, setUserComment] = useState('')
    const navigate = useNavigate()
    const openFullImg = useContext(imgHandler)

    const handleChange = (e) => {
        const value = e.target.value
        setUserComment(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = userComment
        if (value.length > 0) {
            setUserComment('')
            return addComment([value, props.index])
        } else { alert('You cannot add an empty comment.') }
    }
    return (
        <>
            <StyledPost className='post'>
                <div className='postHeader' onClick={() => { navigate(`/user/${userId}`) }}>
                    <img src={userProfilePicture} alt={userName + `'s profile picture`} />
                    <p><span>{userName} </span> posted this.</p>
                </div>
                <div className='postContent'>
                    {text && !text.type ? <p>{text}</p> : null}
                    {props.link ? <a href={props.link}>Link</a> : null}
                    {text.type === 'twopart' ? <p>{'- ' + text.setup}<br />{'- ' + text.delivery}</p> : null}
                    {text.type === 'single' ? <p>{text.joke}</p> : null}
                    {photo ? <img className='postedPhoto' src={photo} alt='' onClick={() => openFullImg(photo)} /> : null}
                </div>
                <div className='reactions'>
                    <p>{liked ? 'You and ' + likes + ' other people liked this' : likes + ' people liked this'}</p>
                    <p>{comments.length} comments</p>
                </div>
                <div className='actionContainer' index={props.index} comments='invisible'>
                    <button className={liked ? 'liked' : null} onClick={handleLike}>Like!</button>
                    <button onClick={handleCommentsToggle}>Comments</button>
                </div>
                <div className={showComments ? 'commentSection' : 'commentSection invisible'}>
                    {commentsToRender}
                    <div className='yourComment'>
                        <div className='commentHeader'>
                            <img src={mainUserState?.userInfo?.picture?.thumbnail} alt={mainUserState.userInfo?.name + `'s profile picture`} />
                            <p>{mainUserState.userInfo?.name?.first + ' ' + mainUserState.userInfo?.name?.last}</p>
                        </div>
                        <div className='inputContainer' index={props.index}>
                            <input onChange={handleChange} value={userComment} placeholder='Start typing' type='text' />
                            <button onClick={handleSubmit}>Post</button>
                        </div>
                    </div>
                </div>
            </StyledPost>
        </>
    )

}


export default Post