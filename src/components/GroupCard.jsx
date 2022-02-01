import { StyledGroupCard } from "./styled/GroupCard.styled"
import { useNavigate } from "react-router"

export const GroupCard=(props)=>{
const {group}=props
const navigate=useNavigate()
const redirectToGroup=()=>{
    navigate(`/groups/${group.groupId}`)
}
    return(
        <StyledGroupCard>
            <div className='cardContentContainer' onClick={redirectToGroup}>
            <div className='imgContainer'>
                <img src={group.groupBgcPhotoThumbnail} alt={group.groupName}/>
                </div>
                <p>{group.groupName}</p>
                <p>Posts: {group.posts.length}</p>
            </div>
        </StyledGroupCard>
    )

}