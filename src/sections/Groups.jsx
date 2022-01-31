
import { GroupCard } from "../components/GroupCard"
import { StyledGroups } from "./styled/Groups.styled"
import { useSelector } from "react-redux";
import { AddGroupPanel } from "../components/AddGroupPanel";



const Groups=()=>{
const groupsState=useSelector(state=>state.groupsReducer)
const mappedGroupCards=groupsState.groups.map((group,index)=><GroupCard group={group} key={index}/>)

    return(
        <StyledGroups>
            {mappedGroupCards}
            <AddGroupPanel/>
        </StyledGroups>
    )

}

  
  export default Groups
