import styled from "styled-components";


export const StyledThemeToggler=styled.div`
align-self: end;
margin-left: 5px;
padding: 10px;
border-radius: 50%;
font-size:20px;
color: ${({theme})=>theme.colors.mainFontColor};
background-color:${({theme})=>theme.colors.bgcBody};
`