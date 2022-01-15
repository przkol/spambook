import { StyledMobileNav } from "./styled/MobileNav.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faBars,faUsers } from "@fortawesome/free-solid-svg-icons";

export const MobileNav=()=>{



    return(
    <StyledMobileNav>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faUsers} />


    </StyledMobileNav>)
}