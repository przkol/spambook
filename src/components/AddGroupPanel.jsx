import { StyledAddGroupPanel} from "./styled/AddGroupPanel.styled"
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export const AddGroupPanel=(props)=>{
const {group}=props
const navigate=useNavigate()
const redirectToGroup=()=>{
    navigate(`/groups/newgroup`)
}
    return(
        <StyledAddGroupPanel>
            <div className='cardContentContainer' onClick={redirectToGroup}>
            <div className='imgContainer'>
                 <FontAwesomeIcon icon={faPlusCircle} />
                </div>
            <div className='groupInfo'>
                <p>Create a new group!</p>
            </div>
            </div>
        </StyledAddGroupPanel>
    )

}