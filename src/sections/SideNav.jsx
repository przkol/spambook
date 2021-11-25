import { StyledSideNav } from "./styled/SideNav.styled";
import { NavLink } from "react-router-dom";

const SideNav=()=>{
    const links=[
        {   name: 'Main page',
        pathname:'/',
        },
        {   name: 'User panel',
            pathname:'/user',
        },
        {   name: 'Groups',
        pathname:'/groups',
        },
        {   name: 'Events',
        pathname:'/events',
        },
    ]

    const mappedLinks=links.map((element,index)=><NavLink  key={index} to={element.pathname} >{element.name}</NavLink>)

    return(
        <StyledSideNav>
            {mappedLinks}
        </StyledSideNav>

    )
}

export default SideNav