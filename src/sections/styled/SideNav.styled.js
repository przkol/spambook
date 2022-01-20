import styled from "styled-components";


export const StyledSideNav=styled.nav`
height: 100vh;
padding-left: 5px;
background-color: ${({theme})=>theme.colors.bgcBody};

.groupLink{
color:${({theme})=>theme.colors.mainFontColor};
border-radius: 10px;
}

.groupLink:hover{
background-color: ${({theme})=>theme.colors.bgcShade1};
}
.active{
background-color: ${({theme})=>theme.colors.bgcShade1};
}

>a,
>*>a{
    display: block;
    text-decoration: none;
    width: 100%;
    font-size:${({theme})=>theme.fonts.headerFontSize};
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

@media(min-width:769px){
width: 25%;
max-width: 250px;
}
`

