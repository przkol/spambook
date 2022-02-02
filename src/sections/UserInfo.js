import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledUserInfo } from "./styled/UserInfo.styled";
import { SET_MAINUSER_DETAILS, SET_MAINUSER_PICTURE } from "../reducers/actions/mainUserActions";
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
    const { userid } = useParams()
    const [userDetails, setUserDetails] = useState()
    const [edittingBaseInfo, setEdittingBaseInfo] = useState(false)
    const [edittingContactInfo, setEdittingContactInfo] = useState(false)
    const [edittingAddressInfo, setEdittingAddressInfo] = useState(false)
    const [uploadedImage, setUploadedImage] = useState()
    const dispatch = useDispatch()
    const friendsState = useSelector(state => state.friendsReducer)
    const mainUser = useSelector(state => state.mainUserReducer)
    const userInfo = userid === 'mainUser' || !userid ? mainUser.userInfo : friendsState.usersList[userid]

    const handleEdit = (e) => {
        e.preventDefault()
        setUserDetails(userInfo)
        const sectionToEdit = e.target.getAttribute('section')
        switch (sectionToEdit) {
            case ('baseInfo'):
                setEdittingBaseInfo(prevState => !prevState)
                break;
            case ('contactInfo'):
                setEdittingContactInfo(prevState => !prevState)
                break;
            case ('addressInfo'):
                setEdittingAddressInfo(prevState => !prevState)
                break;
            default: return
        }
    }

    const handleInfoInput = (e) => {
        const targetInputInfo = e.target.getAttribute('info')
        const targetInputValue = e.target.value

        switch (targetInputInfo) {
            case ('gender'):
            case ('email'):
            case ('phone'):
            case ('cell'):
                setUserDetails(prevState => ({
                    ...prevState,
                    [targetInputInfo]: targetInputValue
                }))
                break;
            case ('nameFirst'):
                setUserDetails(prevState => ({
                    ...prevState,
                    name: {
                        first: targetInputValue,
                        last: prevState.name.last
                    }
                }))
                break;
            case ('nameLast'):
                setUserDetails(prevState => ({
                    ...prevState,
                    name: {
                        last: targetInputValue,
                        first: prevState.name.first
                    }
                }))
                break;
            case ('location'):
                const location = userDetails.location
                switch (e.target.getAttribute('info2')) {
                    case ('name'):
                        location.street.name = targetInputValue
                        break;
                    case ('number'):
                        location.street.number = targetInputValue
                        break;
                    case ('city'):
                        location.city = targetInputValue
                        break;
                    case ('country'):
                        location.country = targetInputValue
                        break;
                    case ('postcode'):
                        location.postcode = targetInputValue
                        break;
                    case ('state'):
                        location.state = targetInputValue
                        break;
                    default:
                }
                setUserDetails(prevState => ({
                    ...prevState,
                    location
                }))
                break;


            default:
        }
    }
    const handlePhotoChange = (e) => {
        setUploadedImage(URL.createObjectURL(e.target.files[0]))
        if (e.target.files && e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0])
            if (userDetails) {
                setUserDetails(prevState => ({
                    ...prevState,
                    picture: { large: image, medium: image, thumbnail: image }
                }))
            } else {
                setUserDetails({ ...userInfo, picture: { large: image, medium: image, thumbnail: image } })
            }
        }
    }

    const handleImageDelete = () => {
        setUploadedImage()
    }

    const handlePhotoSave = () => {
        dispatch(SET_MAINUSER_PICTURE(uploadedImage))
        setUploadedImage()

    }

    const handleSave = (e) => {
        dispatch(SET_MAINUSER_DETAILS(userDetails))
        const sectionToEdit = e.target.getAttribute('section')

        switch (sectionToEdit) {
            case ('baseInfo'):
                setEdittingBaseInfo(prevState => !prevState)
                break;
            case ('contactInfo'):
                setEdittingContactInfo(prevState => !prevState)
                break;
            case ('addressInfo'):
                setEdittingAddressInfo(prevState => !prevState)
                break;
            default: return
        }
    }
    if (userid === 'mainUser' || !userid) {
        if (mainUser.loaded) {
            return (
                <StyledUserInfo className='userInfo'>
                    <div className='profilePicture'>
                        <div className="profilePicContainer">
                            <img src={userInfo.picture.large} alt='' />
                        </div>
                        <div className="uploadContainer">
                            {!uploadedImage ? <label id='profilePic' htmlFor="backgroundPhoto"><FontAwesomeIcon icon={faFileUpload} /></label> : null}
                            {!uploadedImage ? <input type="file" name="backgroundPhoto" accept="image/*" id="backgroundPhoto" onChange={handlePhotoChange} /> : null}
                            {uploadedImage ? <img className="photoPreview" src={uploadedImage} alt="" /> : null}
                            {uploadedImage ? <span className="deletePhoto" onClick={handleImageDelete}>x</span> : null}
                            {uploadedImage ? <span className="savePhoto" onClick={handlePhotoSave}>Change my photo!</span> : null}
                        </div>
                    </div>
                    <div className='baseInfo'>
                        <div><h4>Basic information:</h4>{edittingBaseInfo ? <button section='baseInfo' onClick={handleSave}>Save</button> : <button section='baseInfo' onClick={handleEdit}>Edit</button>}</div>
                        <div><p>Gender:</p>{edittingBaseInfo ? <input info='gender' value={userDetails.gender} onChange={handleInfoInput} /> : <p>{userInfo.gender}</p>}</div>
                        <div><p>First name:</p>{edittingBaseInfo ? <input info='nameFirst' value={userDetails.name.first} onChange={handleInfoInput} /> : <p>{userInfo.name.first}</p>}</div>
                        <div><p>Last name:</p>{edittingBaseInfo ? <input info='nameLast' value={userDetails.name.last} onChange={handleInfoInput} /> : <p>{userInfo.name.last}</p>}</div>
                        <div><p>Registered:</p><p>{userInfo.registered.date} ({userInfo.registered.age} yrs ago)</p></div>
                        <div><p>Date of Birth:</p><p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p></div>
                    </div>
                    <div className='contactInfo'>
                        <div><h4>Contact information:</h4>{edittingContactInfo ? <button section='contactInfo' onClick={handleSave}>Save</button> : <button section='contactInfo' onClick={handleEdit}>Edit</button>}</div>
                        <div><p>E-mail address</p>{edittingContactInfo ? <input info='email' value={userDetails.email} onChange={handleInfoInput} /> : <p>{userInfo.email}</p>}</div>
                        <div><p>Phone No.:</p>{edittingContactInfo ? <input info='phone' value={userDetails.phone} onChange={handleInfoInput} /> : <p>{userInfo.phone}</p>}</div>
                        <div><p>Cell No.:</p>{edittingContactInfo ? <input info='cell' value={userDetails.cell} onChange={handleInfoInput} /> : <p>{userInfo.cell}</p>}</div>
                    </div>
                    <div className='addressInfo'>
                        <div><h4>Address:</h4>{edittingAddressInfo ? <button section='addressInfo' onClick={handleSave}>Save</button> : <button section='addressInfo' onClick={handleEdit}>Edit</button>}</div>
                        <div><p>Street:</p>{edittingAddressInfo ?
                            <><input info='location' info2='name' value={userInfo.location.street.name} onChange={handleInfoInput} />
                                <input info='location' info2='number' value={userInfo.location.street.number} onChange={handleInfoInput} /> </>
                            : <p>{userInfo.location.street.name} {userInfo.location.street.number}</p>}</div>
                        <div><p>City:</p>{edittingAddressInfo ? <input info='location' info2='city' value={userDetails.location.city} onChange={handleInfoInput} /> : <p>{userInfo.location.city}</p>}</div>
                        <div><p>State:</p>{edittingAddressInfo ? <input info='location' info2='state' value={userDetails.location.state} onChange={handleInfoInput} /> : <p>{userInfo.location.state}</p>}</div>
                        <div><p>Postcode:</p>{edittingAddressInfo ? <input info='location' info2='postcode' value={userDetails.location.postcode} onChange={handleInfoInput} /> : <p>{userInfo.location.postcode}</p>}</div>
                        <div><p>Country:</p>{edittingAddressInfo ? <input info='location' info2='country' value={userDetails.location.country} onChange={handleInfoInput} /> : <p>{userInfo.location.country}</p>}</div>
                    </div>

                </StyledUserInfo>)
        }
        else { return <p>Loading...</p> }
    } else {
        if (friendsState.usersListLoadedFlag) {
            return (
                <StyledUserInfo className='userInfo'>
                    <div className='profilePicture'>
                        <img src={userInfo.picture.large} alt='' />
                    </div>
                    <div className='baseInfo'>
                        <div><h4>Basic information:</h4></div>
                        <div><p>Gender:</p><p>{userInfo.gender}</p></div>
                        <div><p>First name:</p><p>{userInfo.name.first}</p></div>
                        <div><p>Last name:</p><p>{userInfo.name.last}</p></div>
                        <div><p>Date of Birth:</p><p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p></div>
                    </div>
                    <div className='contactInfo'>
                        <div><h4>Contact information:</h4></div>
                        <div><p>E-mail address</p><p>{userInfo.email}</p></div>
                        <div><p>Phone No.:</p><p>{userInfo.phone}</p></div>
                        <div><p>Cell No.:</p><p>{userInfo.cell}</p></div>
                    </div>
                    <div className='addressInfo'>
                        <div><h4>Address:</h4></div>
                        <div><p>Street:</p>{edittingAddressInfo ?
                            <><input info='location' info2='name' value={userInfo.location.street.name} onChange={handleInfoInput} />
                                <input info='location' info2='number' value={userInfo.location.street.number} onChange={handleInfoInput} /> </>
                            : <p>{userInfo.location.street.name} {userInfo.location.street.number}</p>}</div>
                        <div><p>City:</p><p>{userInfo.location.city}</p></div>
                        <div><p>State:</p><p>{userInfo.location.state}</p></div>
                        <div><p>Postcode:</p><p>{userInfo.location.postcode}</p></div>
                        <div><p>Country:</p><p>{userInfo.location.country}</p></div>
                    </div>

                </StyledUserInfo>)
        } else { return <p>Loading...</p> }
    }
}




export default UserInfo