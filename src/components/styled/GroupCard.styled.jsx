import styled from "styled-components";

export const StyledGroupCard = styled.div`
    width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 2px;
    padding: 5px;
    color: ${({theme})=>theme.colors.mainFontColor};
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
    background-color:${({theme})=>theme.colors.bgcBody};




    &:hover{
        padding: 0px;
        cursor: pointer;
    }
    .cardContentContainer{
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    }

    .imgContainer{
        width: 100%;
        height: 60%;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .groupInfo{
        padding:2px 5px;
    }





`