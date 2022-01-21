import styled from "styled-components";


export const StyledMobileNav=styled.nav`
font-size:${({theme})=>theme.fonts.iconsFontSize};
justify-content: center;
align-items:center;
width: fit-content;
margin-top: auto auto;


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
@media(min-width:769px){
    display: none;
}

`