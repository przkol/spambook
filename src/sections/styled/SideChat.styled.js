import styled from "styled-components";

export const StyledSideChat=styled.div`

color:${({theme})=>theme.colors.mainFontColor};
background-color:${({theme})=>theme.colors.bgcBody};
width: 100%;
overflow: auto;
height: 100%;
margin: 0 auto;


    .friendsList{
        width:80%;
        max-width: 250px;
        margin:0 auto;
        }
    h3{
        text-align: center;
        padding-left:10px;
        font-size:${({theme})=>theme.fonts.headerFontSize};
    }


@media(min-width:769px){
    position: fixed;
    right: 0;
    max-width: 200px;

    .friendsList{
        width: 100%;
    }

}
`