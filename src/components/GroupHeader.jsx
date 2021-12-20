import { StyledGroupHeader } from "./styled/GroupHeader.styled";



export const GroupHeader=(props)=>{
const targetGroupIndex=props.groupState.groups.findIndex(group=>group.groupID===props.groupIdToShow)



    return(
<StyledGroupHeader>

<img src={props.groupState.groups[targetGroupIndex].groupBgcPhotoFull} alt="background" />

</StyledGroupHeader>

    )
}