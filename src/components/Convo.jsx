import { StyledConvo } from "./styled/Convo.styled";
import { useDispatch } from "react-redux";
import { ADD_MESSAGE_TO_CHAT } from "../reducers/actions/chatActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { activeTabContext } from "../sections/Chatter";
import { imgHandler } from "../App";


const MessageBubble = (props) => {
    const { source, text, image } = props.message
    const openFullImg = useContext(imgHandler)


    return (
        <div className='msg'>
            <div className={source === 'user' ? 'userMsg' : 'friendMsg'}>
                {text ? <p>{text}</p> : null}
                {image ? <img src={image} alt="" className='msgImg' onClick={() => openFullImg(image)} /> : null}
            </div>
        </div>
    )
}
export const Convo = (props) => {
    const { chatContent, friend } = props
    const isConversationActive = useContext(activeTabContext)
    const messagesToRender = chatContent?.messages.map((message, index) => <MessageBubble key={index} message={message} />)
    const dispatch = useDispatch()
    const [uploadedImg, setUploadedImg] = useState()
    const [messageInput, setMessageInput] = useState('')
    const sendMessage = () => {
        if (messageInput.length > 0 || uploadedImg) {
            dispatch(ADD_MESSAGE_TO_CHAT(chatContent.id, 'user', messageInput, uploadedImg))
            setMessageInput('')
            setUploadedImg()
        } else alert('You cannot send empty messages.')
    }


    useEffect(() => {
        const input = document.querySelector(`.msgInput`)
        console.log(input)
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
    }, [])
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
                        <input id={'fileInput'} type='file' accept="image/*" onChange={handleImageUpload} />
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