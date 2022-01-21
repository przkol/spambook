import styled from "styled-components";


export const StyledThemeToggler=styled.div`
margin: 5px auto;
width: fit-content;
font-size:${({theme})=>theme.fonts.iconsFontSize};
color: ${({theme})=>theme.colors.mainFontColor};

@media(min-width:769px){
 margin-left: 5px;
}

`