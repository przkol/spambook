import styled from "styled-components";


export const StyledSideNav=styled.nav`
position: fixed;
left: 0;
height: 100vh;
padding-left: 5px;
background-color: ${({theme})=>theme.colors.bgcBody};
width: 95%;
text-align: center;


.groupLink{
color:${({theme})=>theme.colors.mainFontColor};
border-radius: 10px;
margin-top: 5px;

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
max-width: 250px;
text-align: left;

}
`

