import { StyledGroupCard } from "./styled/GroupCard.styled"


export const GroupCard=(props)=>{
const {group}=props

    return(
        <StyledGroupCard>
            <div className='imgContainer'>
                <img src={group.groupBgcPhotoThumbnail} alt={group.groupName}/>
                </div>
            <div className='groupInfo'>
                <p>{group.groupName}</p>
                <p>Posts: {group.posts.length}</p>
            </div>

        </StyledGroupCard>
    )

}