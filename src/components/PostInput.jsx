import { useEffect, useState, useRef } from "react"
import { StyledPostInput } from "./styled/PostInput.styled"
import { ADD_POST } from "../reducers/actions/postActions"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ADD_GROUP_POST } from "../reducers/actions/groupsActions"
import { useParams } from "react-router"

export const PostInput = (props) => {
    const { groupId } = useParams()
    const mainUserState = useSelector(state => state.mainUserReducer.userInfo)
    const [postText, setPostText] = useState('')
    const [postImage, setPostImage] = useState()
    const dispatch = useDispatch()
    const photoInput = useRef()

    const handleTextChange = (e) => {
        setPostText(e.target.value)
    }
    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]
            setPostImage(URL.createObjectURL(image))
        }
    }
    const handleImageDelete = () => {
        setPostImage()
    }

    const addUserPost = () => {
        if (postText.length > 0 || postImage) {
            const comments = []
            const userPost = {
                userId: 'mainUser',
                type: 'userPost',
                comments: comments,
                photo: postImage,
                text: postText,
                likes: (Math.floor(Math.random() * 25) + 3),
                liked: false,
                showComments: false,
                seenByUser: true
            }
            if (!groupId) {
                dispatch(ADD_POST(userPost))
            } else if (groupId) {
                dispatch(ADD_GROUP_POST(userPost, groupId))
            }
            setPostImage()
            setPostText('')
            photoInput.current.value = null
        } else alert('You cannot add an empty post!')
    }

    useEffect(() => {
        const textArea = document.querySelector('.textContent')

        textArea.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("addPost").click();
            }
        })
        return () => {
            textArea.removeEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    document.getElementById("addPost").click();
                }
            })
        }
    }, [])
    return (
        <StyledPostInput>
            <div className='postHeader'>
                <img src={mainUserState?.picture?.thumbnail} alt={mainUserState?.name?.first + `'s profile picture`} />
                <p>{mainUserState?.name?.first + ' ' + mainUserState?.name?.last}</p>
            </div>
            <div className='inputContainer'>
                <textarea maxLength='250' className='textContent' value={postText} onChange={handleTextChange} placeholder={`What's on your mind, ${mainUserState?.name?.first}?`} />
                <div className="imgContainer">
                    {postImage ? <img src={postImage} alt='upload' /> : null}
                    {postImage ? <span className="deletePhoto" onClick={handleImageDelete}>x</span> : null}
                </div>
                <div className='actionButtonContainer'>
                    <label htmlFor='fileInput'>Upload a photo</label>
                    <input ref={photoInput} id='fileInput' type='file' accept="image/*" onChange={handleImageUpload} />
                    <button id='addPost' onClick={addUserPost}> Post!</button>
                </div>

            </div>


        </StyledPostInput>
    )
}