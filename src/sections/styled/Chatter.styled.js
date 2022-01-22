import styled from "styled-components";



export const StyledChatter =styled.section`
    width: 100%;
    height: 90vh;
    max-height: 650px;
    border-radius: 10px;
    color:${({theme})=>theme.colors.mainFontColor};
    margin-bottom:15px;
    overflow: hidden;
    background-color:${({theme})=>theme.colors.bgcFeed};
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
    display: flex;



    .chatList,
    .conversation{
        height: 100%;
    }
    .chatList{
        width: 40%;
        background-color:black;
    }
    .conversation{
        width: 60%;
        background-color:grey;

    }
`