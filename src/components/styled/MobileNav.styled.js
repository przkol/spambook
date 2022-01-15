import styled from "styled-components";


export const StyledMobileNav=styled.nav`
font-size:${({theme})=>theme.fonts.iconsFontSize};
align-self: center;

svg{
    box-sizing: content-box;
    margin: 0 8px;
    padding: 5px;
border-radius: 5px;
}

svg:hover{
background-color:${({theme})=>theme.colors.bgcBody};
color:${({theme})=>theme.colors.mainFontColor};
cursor: pointer;
}
`