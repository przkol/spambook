import { StyledAddGroupForm } from "./styled/AddGroupForm.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_NEW_GROUP } from "../reducers/actions/groupsActions";
import { useNavigate } from "react-router";

export const AddGroupForm = () => {
    const mainUserState = useSelector(state => state.mainUserReducer)
    const groupState = useSelector(state => state.groupsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [groupName, setGroupName] = useState('')
    const [groupImage, setGroupImage] = useState()
    const [termsAgreed, setTermsAgreed] = useState(false)
    const [userEmailInput, setUserEmailInput] = useState('')
    const validationFlagsObject = { groupNameOK: false, emailOK: false, agreementOK: false, photoOK: false, submitted: false, generalCheck: false }
    const [validationFlags, setValdiationFlags] = useState(validationFlagsObject)

    const handleGroupNameChange = (e) => {
        const value = e.target.value
        setGroupName(value)
    }
    const handleEmailChange = (e) => {
        const value = e.target.value.toLowerCase()
        setUserEmailInput(value)
    }
    const handleAgreementChange = (e) => {
        const value = e.target.checked
        setTermsAgreed(value)
    }

    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]
            setGroupImage(URL.createObjectURL(image))
        }
    }
    const handleImageDelete = () => {
        setGroupImage()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentFlags = validationFlags
        const emailFromState = mainUserState.userInfo.email.toLowerCase()
        const groupNameInUseFlag = groupState.groups.some(group => group.groupName.toLowerCase() === groupName.toLowerCase())
        if (emailFromState === userEmailInput) {
            currentFlags.emailOK = true
        } else { currentFlags.emailOK = false }
        if (!groupNameInUseFlag && groupName !== '') {
            currentFlags.groupNameOK = true
        } else { currentFlags.groupNameOK = false }
        if (groupImage) {
            currentFlags.photoOK = true
        } else { currentFlags.photoOK = false }
        if (termsAgreed) {
            currentFlags.agreementOK = true
        } else { currentFlags.agreementOK = false }

        currentFlags.submitted = true

        if (currentFlags.emailOK && currentFlags.groupNameOK && currentFlags.photoOK && currentFlags.agreementOK) {
            currentFlags.generalCheck = true
        } else {
            currentFlags.generalCheck = false
        }

        setValdiationFlags({ ...currentFlags })

        if (currentFlags.generalCheck) {
            dispatch(ADD_NEW_GROUP(groupName, groupImage))
            setGroupName('')
            setGroupImage()
            setTermsAgreed(false)
            setUserEmailInput('')
            const groupUrl = window.btoa(groupName)
            setTimeout(() => { navigate(`/groups/${groupUrl}`) }, 1000)
        }
    }
    return (
        <StyledAddGroupForm>
            <h3>New group creation form</h3>
            <form className={validationFlags.submitted ? 'submitted' : ''} onSubmit={handleSubmit}>
                <label htmlFor="groupName">Please enter your group's name: </label>
                <input type="text" maxLength="25" name="groupName" id="groupName" value={groupName} onChange={handleGroupNameChange} />
                <p className={validationFlags.groupNameOK ? "warning" : "warning visible"}> Group name invalid or already in use.</p>
                <p>Please upload your group's background photo:</p>
                <div className="uploadContainer">
                    <label htmlFor="backgroundPhoto"><FontAwesomeIcon icon={faFileUpload} /></label>
                    <input type="file" name="backgroundPhoto" accept="image/*" id="backgroundPhoto" onChange={handlePhotoChange} />
                    <img src={groupImage} alt="" />
                    {groupImage ? <span className="deletePhoto" onClick={handleImageDelete}>x</span> : null}
                </div>
                <p className={validationFlags.photoOK ? "warning" : "warning visible"}>You need to upload a photo.</p>

                <label htmlFor="userEmail">Please enter e-mail address for validation (you can find it in user panel) </label>
                <input type="text" maxLength="30" name="userEmail" id="userEmail" value={userEmailInput} onChange={handleEmailChange} />
                <p className={validationFlags.emailOK ? "warning" : "warning visible"}>E-mail incorrect.</p>

                <label htmlFor="termsOfService"><input type="checkbox" name="termsOfService" id="termsOfService" checked={termsAgreed} onChange={handleAgreementChange} /> I have read and accept the terms of service.</label>
                <p className={validationFlags.agreementOK ? "warning" : "warning visible"}> You need to accept the terms of service.</p>

                <label htmlFor="submit"></label>
                <input type="submit" value="Create a group for me!" />
                <p className="warning">Form submission not allowed, please look above for details.</p>

            </form>
        </StyledAddGroupForm>
    )
}