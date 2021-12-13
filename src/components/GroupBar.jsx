import { NavLink } from "react-router-dom";
import { StyledGroupBar } from "./styled/GroupBar.styled";



export const GroupBar=(props)=>{


    return(
    <StyledGroupBar><NavLink 
     to={props.groupPath}>
         {props.groupName}  
     </NavLink>
      {props.postsNum>0?<span>{props.postsNum}</span>:null}
     
     </StyledGroupBar>
    
    

    )



}