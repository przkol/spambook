import { StyledGroupHeader } from "./styled/GroupHeader.styled";
import { imgHandler } from "../App"
import { useContext } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export const GroupHeader=(props)=>{
const {groupId}=useParams()
const groupState=useSelector(state=>state.groupsReducer)
const targetGroup=groupState.groups.find(group=>group.groupId===groupId)
const openFullImg=useContext(imgHandler)
const imgSource=targetGroup.groupBgcPhotoFull

    return(
<StyledGroupHeader onClick={()=>openFullImg(imgSource)}>

<img src={imgSource} alt="group background pic" />

</StyledGroupHeader>

    )
}