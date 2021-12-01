
import { useSelector } from "react-redux"
import { GroupCard } from "../components/GroupCard"
import { StyledGroups } from "./styled/Groups.styled"
import { connect } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";


const Groups=(props)=>{
// const groupsFromState=useSelector(state=>state.groupsReducer)
const [groupElements,setGroupElements]=useState()
    useEffect(()=>{
        const mappedGroupCards=props.groups.map((group,index)=><GroupCard group={group} key={index}/>)
        setGroupElements(mappedGroupCards)
        console.log(props.groups)
    },[props.groups]    )



    return(
        <StyledGroups>
            {groupElements}
        </StyledGroups>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        friends:state.friendsReducer,
        groups: state.groupsReducer
    };
  }
  
  
  export default connect(mapStateToProps)(Groups);
