import styled from "styled-components";

export const StyledGroupCard = styled.div`
    width: 40%;
    height: 200px;
    margin-bottom: 10px;
    padding: 5px;
    color: ${({theme})=>theme.colors.mainFontColor};
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
    background-color:${({theme})=>theme.colors.bgcBody};
    transition: .2s;

    &:hover{
        cursor: pointer;
    }
    .cardContentContainer{
        display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    @media(min-width:600px){
    max-width: 30%;


}



`