import styled from "styled-components";


export const StyledGroups=styled.section`
width: 100%;
min-height: 50vh;
box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
background-color:${({theme})=>theme.colors.bgcFeed};
font-size:${({theme})=>theme.fonts.mainFontSize};
border-radius: 10px;
margin-top: 10px;
padding: 10px;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`