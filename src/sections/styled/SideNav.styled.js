import styled from "styled-components";


export const StyledSideNav=styled.nav`
width:260px;
height: fit-content;
padding-left: 5px;

.groupLink{
color:${({theme})=>theme.colors.darkFont};
border-radius: 10px;
}

.groupLink:hover{
background-color: ${({theme})=>theme.colors.bgcLightBlue};
}
.active{
background-color: ${({theme})=>theme.colors.bgcLightBlue};
}

>a,
>*>a{
    display: block;
    text-decoration: none;
    width: 100%;
    font-size: 20px;
    padding: 5px 8px;
    font-weight: 600;
    transition: .2s;
}
a:hover{
    padding-left:12px;
}

.selected{
    color: red;
}
`

