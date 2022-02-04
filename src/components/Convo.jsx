import { StyledConvo } from "./styled/Convo.styled";
import { useDispatch } from "react-redux";
import { ADD_MESSAGE_TO_CHAT } from "../reducers/actions/chatActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect, useRef } from "react";
import { activeTabContext } from "../sections/Chatter";
import { MessageBubble } from "./MessageBubble";

export const Convo = (props) => {
    const { chatContent, friend } = props
    const isConversationActive = useContext(activeTabContext)
    const messagesToRender = chatContent?.messages.map((message, index) => <MessageBubble key={index} message={message} />)
    const dispatch = useDispatch()
    const [uploadedImg, setUploadedImg] = useState()
    const [messageInput, setMessageInput] = useState('')
    const fileInput = useRef()
    const sendMessage = () => {
        if (messageInput.length > 0 || uploadedImg) {
            dispatch(ADD_MESSAGE_TO_CHAT(chatContent.id, 'user', messageInput, uploadedImg))
            setMessageInput('')
            setUploadedImg()
            fileInput.current.value = null
        } else alert('You cannot send empty messages.')
    }

    useEffect(() => {
        if (isConversationActive && chatContent && friend) {
            const input = document.querySelector(`.msgInput`)

            input.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    document.getElementById('sendButtonConvo').click();
                }
            })
            return () => {
                input.removeEventListener('keyup', (e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        document.getElementById('sendButtonConvo').click();
                    }
                })
            }
        }
    }, [chatContent, friend, isConversationActive])
    const handleImageDelete = () => {
        setUploadedImg()
    }
    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]
            setUploadedImg(URL.createObjectURL(image))
        }

    }
    if (isConversationActive && chatContent && friend) {
        return (
            <StyledConvo>
                <div className="convoHeader">
                    <img src={friend?.picture.thumbnail} alt="" />
                    <h3>{friend?.name.first + ' ' + friend?.name.last}</h3>
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
                        <input type='text' placeholder='Aa...' className='msgInput' value={messageInput} onChange={(e) => { setMessageInput(e.target.value) }} />
                        <label id='fileInputLabel' htmlFor={'fileInput'}><FontAwesomeIcon icon={faFileImage} /></label>
                        <input ref={fileInput} id={'fileInput'} type='file' accept="image/*" onChange={handleImageUpload} />
                        <button id={'sendButtonConvo'} onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>

                </div>
            </StyledConvo>
        )
    } else if (!isConversationActive && chatContent && friend) {
        return (
            <StyledConvo>
                <img className="big" src={friend?.picture.thumbnail} alt="" />

            </StyledConvo>
        )
    } else if (!chatContent || !friend) {

        return (<StyledConvo>
        </StyledConvo>)
    }
}