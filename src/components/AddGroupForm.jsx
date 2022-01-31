import { StyledAddGroupForm } from "./styled/AddGroupForm.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

export const AddGroupForm=()=>{
    return(
        <StyledAddGroupForm>
            <h3>New group creation form</h3>
            <form >
                <label htmlFor="groupName">Please enter your group's name: </label>
                <input type="text" name="groupName" id="groupName" />
                <p>Please upload your group's background photo:</p>
                <label htmlFor="backgroundPhoto"><FontAwesomeIcon icon={faFileUpload} /></label>
                <input type="file" name="backgroundPhoto" accept="image/*" id="backgroundPhoto" />
                <label htmlFor="termsOfService"><input type="checkbox" name="termsOfService" id="termsOfService" /> I have read and accept the terms of service.</label>
                <label htmlFor="submit"></label>
                <input type="submit" value="Create a group for me!" />
            </form>
        </StyledAddGroupForm>
    )
}