import styled from "styled-components";

export const StyledAddGroupPanel = styled.div`
    width: 40%;
    height: 200px;
    display: flex;
    margin: 0 2px;
    padding: 5px;
    color: ${({theme})=>theme.colors.mainFontColor};
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
    background-color:${({theme})=>theme.colors.bgcBody};


    &:hover{
        cursor: pointer;
    }
    .cardContentContainer{
        display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    }

    .imgContainer{
        width: 100%;
        font-size: 3rem;
        text-align: center;
    }

    .groupInfo{
        text-align: center;
    }

    @media(min-width:600px){
    max-width: 30%;}




`