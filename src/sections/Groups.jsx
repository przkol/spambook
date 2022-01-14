
import { GroupCard } from "../components/GroupCard"
import { StyledGroups } from "./styled/Groups.styled"
import { connect } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";



const Groups=(props)=>{
// const groupsFromState=useSelector(state=>state.groupsReducer)
const [groupElements,setGroupElements]=useState()
    useEffect(()=>{
        const mappedGroupCards=props.groups.groups.map((group,index)=><GroupCard group={group} groupState={props.groups} key={index}/>)
        setGroupElements(mappedGroupCards)
    },[props.groups])

console.log(props.groups)

    return(
        <StyledGroups>
            {groupElements}
        </StyledGroups>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        friends: state.friendsReducer,
        groups: state.groupsReducer
    };
  }
  
  
  export default connect(mapStateToProps)(Groups);
