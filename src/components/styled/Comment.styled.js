import styled from "styled-components";


export const StyledComment=styled.div`
        padding: 2px 8px;
        background-color:  ${({theme})=>theme.colors.bgcBody};
        border-radius:10px;
        margin-bottom:5px;
        margin-left:5px;
        width:fit-content;
        max-width:90%;
   
    .commentHeader{
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 14px;
        font-weight:500;
    }
    .commentHeader img{
        height: 80%;
        border-radius: 50%;
        margin-right: 5px;
    }
    .commentText{
        padding:0 0 2px 5px;
    }


`