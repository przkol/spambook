import { useState, useEffect, useRef } from "react";
import { StyledChatWindow } from "./styled/ChatWindow.styled";
import { ADD_MESSAGE_TO_CHAT, SET_MESSAGES_SEEN } from "../reducers/actions/chatActions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize, faTimes, faPaperPlane, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { MessageBubble } from "./MessageBubble";

export const ChatWindow = (props) => {
    const { id, unreadMsg, messages } = props.chat
    const { friend, index } = props
    const { closeChatWindow } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [messageInput, setMessageInput] = useState('')
    const [chatWindowVisible, setChatWindowVisible] = useState(true)
    const [uploadedImg, setUploadedImg] = useState()
    const photoUpload = useRef()
    const sendMessage = () => {
        if (messageInput !== '' || uploadedImg) {
            dispatch(ADD_MESSAGE_TO_CHAT(id, 'user', messageInput, uploadedImg ? uploadedImg : null))
            setMessageInput('')
            setUploadedImg()
            photoUpload.current.value = null
        } else alert('You cannot send empty messages.')
    }
    const setSeenMessages = () => {
        dispatch(SET_MESSAGES_SEEN(id))
    }
    const messagesToRender = messages.map((message, index) => <MessageBubble key={index} message={message} />)
    const toggleChatWindowVisibility = () => {
        setChatWindowVisible((prevState) => !prevState)
    }
    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]
            setUploadedImg(URL.createObjectURL(image))
        }
    }
    const handleImageDelete = () => {
        setUploadedImg()
    }

    useEffect(() => {
        const input = document.querySelector(`.msgInput` + index)

        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById(index).click();
            }
        })
        return () => {
            input.removeEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    document.getElementById(index).click();
                }
            })
        }
    }, [index])
    return (
        <StyledChatWindow onClick={setSeenMessages}>
            <div className={chatWindowVisible ? 'chatWindowOpened' : 'chatWindowBubble'}>
                <div className="chatBubble" onClick={chatWindowVisible ? null : toggleChatWindowVisibility}>
                    <img className='friendPic' src={friend?.picture.thumbnail} alt={friend?.name.first + `'s profile picture`} />
                    {unreadMsg ? <span>{unreadMsg}</span> : null}
                </div>
                <div className="windowHeader"  >
                    <img className='friendPic' src={friend?.picture.thumbnail} alt={friend?.name.first + `'s profile picture`} onClick={() => { navigate(`/user/${id}`) }} />
                    <h3 onClick={() => { navigate(`/user/${id}`) }}>{friend?.name.first + ' ' + friend?.name.last} </h3> <span>{unreadMsg ? `(${unreadMsg})` : null}</span>
                    <div className="buttons">
                        <button onClick={toggleChatWindowVisibility}><FontAwesomeIcon icon={faWindowMinimize} /></button>
                        <button onClick={() => closeChatWindow(id)}><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                </div>
                <div className="messages">
                    {messagesToRender}
                </div>
                <div className="messageInput">
                    {uploadedImg ? <div className="uploadedImgContainer">
                        <span className="deletePhoto" onClick={handleImageDelete}>x</span>
                        <img src={uploadedImg} alt='upload' />
                    </div> : null}
                    <div className="messageInputContainer">
                        <label htmlFor='YourMessage'> <input className={`msgInput` + index} type='text' placeholder='Aa...' value={messageInput} onChange={(e) => { setMessageInput(e.target.value) }} /></label>
                        <label id='fileInputLabel' htmlFor={'fileInput' + index}><FontAwesomeIcon icon={faFileImage} /></label>
                        <input ref={photoUpload} id={'fileInput' + index} type='file' accept="image/*" onChange={handleImageUpload} />
                        <button id={index} onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
                </div>
            </div>
        </StyledChatWindow>
    )
}