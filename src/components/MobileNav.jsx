import { StyledMobileNav } from "./styled/MobileNav.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faBars,faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export const MobileNav=()=>{



    return(
    <StyledMobileNav>
        <NavLink  to={'/m/navigation'} ><FontAwesomeIcon icon={faBars} /></NavLink>
        <NavLink  to={'/m/chatter'} ><FontAwesomeIcon icon={faComments} /></NavLink>
        <NavLink  to={'/m/contactlist'} ><FontAwesomeIcon icon={faUsers} /></NavLink>
    </StyledMobileNav>)
}