import styled from "styled-components";


export const StyledThemeToggler=styled.div`
align-self: end;
margin-left: 5px;
width: fit-content;
font-size:${({theme})=>theme.fonts.iconsFontSize};
color: ${({theme})=>theme.colors.mainFontColor};
`