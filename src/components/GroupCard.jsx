import { StyledGroupCard } from "./styled/GroupCard.styled"
import { useNavigate } from "react-router"

export const GroupCard=(props)=>{
const {group,groupState}=props
const navigate=useNavigate()

const redirectToGroup=()=>{
    navigate(`/groups/${group.groupID}`)
}
    return(
        <StyledGroupCard>
            <div className='cardContentContainer' onClick={redirectToGroup}>
            <div className='imgContainer'>
                <img src={group.groupBgcPhotoThumbnail} alt={group.groupName}/>
                </div>
            <div className='groupInfo'>
                <p>{group.groupName}</p>
                <p>Posts: {groupState.footballPosts.length}</p>
            </div>
            </div>
        </StyledGroupCard>
    )

}