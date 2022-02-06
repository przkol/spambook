import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledUserInfo } from "./styled/UserInfo.styled";
import { SET_MAINUSER_DETAILS, SET_MAINUSER_PICTURE } from "../reducers/actions/mainUserActions";
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
    const { userid } = useParams()
    const [userDetails, setUserDetails] = useState()
    const [edittingBaseInfo, setEdittingBaseInfo] = useState(false)
    const [edittingContactInfo, setEdittingContactInfo] = useState(false)
    const [edittingAddressInfo, setEdittingAddressInfo] = useState(false)
    const [uploadedImage, setUploadedImage] = useState()
    const [contactChecks, setContactChecks] = useState({ email: false, cell: false, submitted: false })
    const [baseChecks, setBaseChecks] = useState({ firstName: false, lastName: false, submitted: false })
    const [addressChecks, setAddressChecks] = useState({ city: false, country: false, streetName: false, streetNumber: false, postcode: false, submitted: false })
    const dispatch = useDispatch()
    const friendsState = useSelector(state => state.friendsReducer)
    const mainUser = useSelector(state => state.mainUserReducer)
    const userInfo = userid === 'mainUser' || !userid ? mainUser.userInfo : friendsState.usersList[userid]

    const validate = (section) => {
        switch (section) {
            case ('contactInfo'):
                const emailRegEx = /\S+@\S+\.\S+/;
                const email = userDetails.email;
                const contactChecksLocal = {
                    email: emailRegEx.test(email),
                    cell: (userDetails.cell.length >= 7 && userDetails.cell.length <= 15),
                };
                setContactChecks({ ...contactChecksLocal, submitted: true })
                return (Object.values(contactChecksLocal).every(item => item === true))
            case ('baseInfo'):
                const baseChecksLocal = {
                    firstName: userDetails.name.first.length > 1,
                    lastName: userDetails.name.last.length > 1,
                };
                setBaseChecks({ ...baseChecksLocal, submitted: true })
                return (Object.values(baseChecksLocal).every(item => item === true))
            case ('addressInfo'):
                const addressChecksLocal = {
                    streetName: userDetails.location.street.name.length > 2,
                    streetNumber: String(userDetails.location.street.number).length > 0,
                    city: userDetails.location.city.length > 2,
                    country: userDetails.location.country.length > 2,
                    postcode: String(userDetails.location.postcode).length > 2,
                };
                setAddressChecks({ ...addressChecksLocal, submitted: true });
                return (Object.values(addressChecksLocal).every(item => item === true))

            default: return
        }
    }
    const handleSave = (e) => {
        const sectionToEdit = e.target.getAttribute('section')
        const sectionChecks = validate(sectionToEdit)
        if (sectionChecks) {
            dispatch(SET_MAINUSER_DETAILS(userDetails))

            switch (sectionToEdit) {
                case ('baseInfo'):
                    setEdittingBaseInfo(false)
                    break;
                case ('contactInfo'):
                    setEdittingContactInfo(false)
                    break;
                case ('addressInfo'):
                    setEdittingAddressInfo(false)
                    break;
                default: return
            }
        }
        else return

    }

    const handleEdit = (e) => {
        e.preventDefault()
        const sectionToEdit = e.target.getAttribute('section')
        if (edittingAddressInfo || edittingBaseInfo || edittingContactInfo) {
            alert('You can only edit one section at a time.')
        } else {
            switch (sectionToEdit) {
                case ('baseInfo'):
                    setEdittingBaseInfo(true)
                    break;
                case ('contactInfo'):
                    setEdittingContactInfo(true)
                    break;
                case ('addressInfo'):
                    setEdittingAddressInfo(true)
                    break;
                default: return
            }
        }
    }

    const handleInfoInput = (e) => {
        const targetInputInfo = e.target.getAttribute('info')
        const targetInputValue = e.target.value
        const targetSection = e.target.parentNode.parentNode.getAttribute('section')
        validate(targetSection)
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
    // const handleCancelEditing = (e) => {
    //     e.preventDefault()
    //     const sectionToEdit = e.target.getAttribute('section')
    //     console.log(userInfo)

    //     switch (sectionToEdit) {
    //         case ('baseInfo'):
    //             setEdittingBaseInfo(false)
    //             break;
    //         case ('contactInfo'):
    //             setEdittingContactInfo(false)
    //             break;
    //         case ('addressInfo'):
    //             setEdittingAddressInfo(false)
    //             break;
    //         default: return
    //     }
    //     setUserDetails({ ...userInfo })

    // }

    useEffect(() => {
        setUserDetails(userInfo)
    }, [userInfo])


    if (userid === 'mainUser' || !userid) {
        if (mainUser.loaded) {
            return (
                <StyledUserInfo className='userInfo'>
                    <div className='profilePicture'>
                        <div className="profilePicContainer">
                            <img src={userInfo.picture.large} alt='' />
                        </div>
                        <div className="uploadContainer">
                            {!uploadedImage ? <label id='profilePic' htmlFor="backgroundPhoto"><FontAwesomeIcon icon={faFileUpload} /> Upload new photo!</label> : null}
                            {!uploadedImage ? <input type="file" name="backgroundPhoto" accept="image/*" id="backgroundPhoto" onChange={handlePhotoChange} /> : null}
                            {uploadedImage ? <img className="photoPreview" src={uploadedImage} alt="" /> : null}
                            {uploadedImage ? <span className="deletePhoto" onClick={handleImageDelete}>x</span> : null}
                            {uploadedImage ? <span className="savePhoto" onClick={handlePhotoSave}>Save this photo!</span> : null}
                        </div>
                    </div>
                    <div section='baseInfo' className={baseChecks.submitted ? 'submitted baseInfo' : 'baseInfo'}>
                        <div>
                            <h4>Basic information:</h4>
                            {edittingBaseInfo ? <button section='baseInfo' onClick={handleSave}>Save</button> :
                                <button section='baseInfo' onClick={handleEdit}>Edit</button>}
                        </div>
                        <div validationfailed={`${baseChecks.firstName}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> First name{!baseChecks.firstName && baseChecks.submitted ? ' is too short' : `:`}</p>
                            {edittingBaseInfo ? <input info='nameFirst' value={userDetails.name.first} onChange={handleInfoInput} /> :
                                <p>{userInfo.name.first}</p>}
                        </div>
                        <div validationfailed={`${baseChecks.lastName}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Last name{!baseChecks.lastName && baseChecks.submitted ? ' is too short' : `:`}</p>
                            {edittingBaseInfo ? <input info='nameLast' value={userDetails.name.last} onChange={handleInfoInput} /> :
                                <p>{userInfo.name.last}</p>}
                        </div>
                        <div>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Gender:</p>
                            {edittingBaseInfo ? <input info='gender' value={userDetails.gender} onChange={handleInfoInput} /> :
                                <p>{userInfo.gender}</p>}
                        </div>


                        <div>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Registered:</p>
                            <p>{userInfo.registered.date} ({userInfo.registered.age} yrs ago)</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Date of Birth:</p>
                            <p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p>
                        </div>
                    </div>
                    <div section='contactInfo' className={contactChecks.submitted ? 'submitted contactInfo' : 'contactInfo'}>
                        <div>
                            <h4>Contact information:</h4>
                            {edittingContactInfo ? <button section='contactInfo' onClick={handleSave}>Save</button> :
                                <button section='contactInfo' onClick={handleEdit}>Edit</button>}
                        </div>
                        <div validationfailed={`${contactChecks.email}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> E-mail{!contactChecks.email && contactChecks.submitted ? ' format is invalid' : `:`}</p>
                            {edittingContactInfo ? <input info='email' value={userDetails.email} onChange={handleInfoInput} /> :
                                <p>{userInfo.email}</p>}
                        </div>
                        <div>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Phone No.:</p>
                            {edittingContactInfo ? <input info='phone' value={userDetails.phone} onChange={handleInfoInput} /> :
                                <p>{userInfo.phone}</p>}
                        </div>
                        <div validationfailed={`${contactChecks.cell}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Cell No.{!contactChecks.cell && contactChecks.submitted ? ' format is invalid' : `:`}</p>
                            {edittingContactInfo ? <input info='cell' type='number' value={userDetails.cell} onChange={handleInfoInput} /> :
                                <p>{userInfo.cell}</p>}
                        </div>
                    </div>
                    <div section='addressInfo' className={addressChecks.submitted ? 'submitted addressInfo' : 'addressInfo'}>
                        <div>
                            <h4>Address:</h4>
                            {edittingAddressInfo ? <button section='addressInfo' onClick={handleSave}>Save</button> :
                                <button section='addressInfo' onClick={handleEdit}>Edit</button>}</div>
                        <div validationfailed={`${addressChecks.streetName && addressChecks.streetNumber}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Street name/number{!addressChecks.streetName && addressChecks.submitted ? ' is too short' : `:`}</p>
                            {edittingAddressInfo ? <div id='streetInfo'><input info='location' info2='name' value={userInfo.location.street.name} onChange={handleInfoInput} />
                                <input info='location' info2='number' value={userInfo.location.street.number} onChange={handleInfoInput} /> </div>
                                : <p>{userInfo.location.street.name} {userInfo.location.street.number}</p>}
                        </div>
                        <div validationfailed={`${addressChecks.city}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> City{!addressChecks.city && addressChecks.submitted ? ' name is too short' : `:`}</p>
                            {edittingAddressInfo ? <input info='location' info2='city' value={userDetails.location.city} onChange={handleInfoInput} /> :
                                <p>{userInfo.location.city}</p>}
                        </div>
                        <div validationfailed={`${addressChecks.state}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> State:</p>
                            {edittingAddressInfo ? <input info='location' info2='state' value={userDetails.location.state} onChange={handleInfoInput} /> :
                                <p>{userInfo.location.state}</p>}
                        </div>
                        <div validationfailed={`${addressChecks.postcode}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Postcode{!addressChecks.postcode && addressChecks.submitted ? ' is too short' : `:`}</p>
                            {edittingAddressInfo ? <input info='location' info2='postcode' value={userDetails.location.postcode} onChange={handleInfoInput} /> :
                                <p>{userInfo.location.postcode}</p>}
                        </div>
                        <div validationfailed={`${addressChecks.country}`}>
                            <p><FontAwesomeIcon className={'icon'} icon={faInfoCircle} /> Country{!addressChecks.country && addressChecks.submitted ? ' name is too short' : `:`}</p>
                            {edittingAddressInfo ? <input info='location' info2='country' value={userDetails.location.country} onChange={handleInfoInput} /> :
                                <p>{userInfo.location.country}</p>}
                        </div>
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
                        <div>
                            <h4>Basic information:</h4>
                        </div>
                        <div>
                            <p>Gender:</p><p>{userInfo.gender}</p>
                        </div>
                        <div>
                            <p>First name:</p><p>{userInfo.name.first}</p>
                        </div>
                        <div>
                            <p>Last name:</p><p>{userInfo.name.last}</p>
                        </div>
                        <div>
                            <p>Date of Birth:</p><p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p>
                        </div>
                    </div>
                    <div className='contactInfo'>
                        <div>
                            <h4>Contact information:</h4>
                        </div>
                        <div>
                            <p>E-mail address</p><p>{userInfo.email}</p>
                        </div>
                        <div>
                            <p>Phone No.:</p><p>{userInfo.phone}</p>
                        </div>
                        <div>
                            <p>Cell No.:</p><p>{userInfo.cell}</p>
                        </div>
                    </div>
                    <div className='addressInfo'>
                        <div>
                            <h4>Address:</h4>
                        </div>
                        <div>
                            <p>Street:</p>{edittingAddressInfo ?
                                <><input info='location' info2='name' value={userInfo.location.street.name} onChange={handleInfoInput} />
                                    <input info='location' info2='number' value={userInfo.location.street.number} onChange={handleInfoInput} /> </>
                                : <p>{userInfo.location.street.name} {userInfo.location.street.number}</p>}
                        </div>
                        <div>
                            <p>City:</p><p>{userInfo.location.city}</p>
                        </div>
                        <div>
                            <p>State:</p><p>{userInfo.location.state}</p>
                        </div>
                        <div>
                            <p>Postcode:</p><p>{userInfo.location.postcode}</p>
                        </div>
                        <div>
                            <p>Country:</p><p>{userInfo.location.country}</p>
                        </div>
                    </div>

                </StyledUserInfo>)
        } else { return <p>Loading...</p> }
    }
}




export default UserInfo