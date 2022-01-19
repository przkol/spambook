import styled from "styled-components";

export const StyledSideChat=styled.div`
color:${({theme})=>theme.colors.mainFontColor};
background-color:${({theme})=>theme.colors.bgcBody};;
.friendsList{
    width:100%;
    }
h3{
    padding-left:10px;
    font-size:${({theme})=>theme.fonts.headerFontSize};
}
div.chatWindowContainer{
    display: flex;
    }



    @media(min-width:769px){
    width: 25%;
    max-width: 220px;
    }
`