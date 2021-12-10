import { StyledGroupCard } from "./styled/GroupCard.styled"
import { useNavigate } from "react-router"

export const GroupCard=(props)=>{
const {group}=props
const navigate=useNavigate()
console.log(props.group)

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
                <p>Posts: {group.posts.length}</p>
            </div>
            </div>
        </StyledGroupCard>
    )

}