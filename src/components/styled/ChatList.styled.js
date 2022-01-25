import styled from "styled-components";


export const StyledChatList=styled.div`
height: 100%;
width: 100%;
max-width: 205px;
overflow-y:auto;
overflow-x: hidden;
direction: rtl;

a{
    display: block;
    width: fit-content;
    margin: 5px auto 0 auto;
    color:${({theme})=>theme.colors.mainFontColor};
}
svg{
    box-sizing: content-box;
    margin: 0 auto;
    padding: 5px;
    border-radius: 50%;
    background-color:${({theme})=>theme.colors.bgcShade1};
}
`