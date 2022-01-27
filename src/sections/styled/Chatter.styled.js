import styled from "styled-components";



export const StyledChatter =styled.section`
position: relative;
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
        transition: .2s;
    }
    .chatList{
        width: 85%;
        border-right: 1px solid ${({theme})=>theme.colors.bgcShade1};
    }
    .conversation{
        width: 15%;
    }

    .conversation.wide{
        width: 85%;
    }
    .chatList.thin{
        width: 15%;
    }

    .arrow{
        position: absolute;
        top: 50%;
        margin: 0 5px;
        width:1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color:${({theme})=>theme.colors.bgcShade1};
        transition:.2s;
    }

    .arrow.right{
        left:15%;
    }
    .arrow.left{
        left:85%;
        transform:rotate(180deg)


    }
`