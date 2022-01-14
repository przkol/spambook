import { StyledGroupHeader } from "./styled/GroupHeader.styled";
import { imgHandler } from "../App"
import { useContext } from "react";

export const GroupHeader=(props)=>{
const targetGroupIndex=props.groupState.groups.findIndex(group=>group.groupID===props.groupIdToShow)
const openFullImg=useContext(imgHandler)
const imgSource=props.groupState.groups[targetGroupIndex].groupBgcPhotoFull


    return(
<StyledGroupHeader onClick={()=>openFullImg(imgSource)}>

<img src={imgSource} alt="background" />

</StyledGroupHeader>

    )
}