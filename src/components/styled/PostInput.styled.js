import styled from "styled-components";


export const StyledPostInput = styled.div`
    color:${({theme})=>theme.colors.mainFontColor};
    width: 100%;
    background-color:${({theme})=>theme.colors.bgcFeed};
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};


    .postHeader{
        display: flex;
        width: 100%;
        height: 50px;
        padding: 5px;
        /* border-bottom: 1px solid ${({theme})=>theme.colors.bgcShade1}; */
    }
    .postHeader>p{
        margin: auto 0 ;
        font-size: 16px;
        font-weight: 600;
    }

    .postHeader img{
        border-radius:50%;
        margin: 0 10px;
    }

    .inputContainer{
        height: 100%;
        width: 100%;
        text-align: center;

    }

    .inputContainer>img{
        height: 50px;
    }
    #fileInput{
        display: none;
    }
    .textContent{
        padding: 3px;
        border-radius: 10px;
        border:none;
        width: 95%;
        resize:none;
        height: 100px;
        color: ${({theme})=>theme.colors.mainFontColor};
        font-family: inherit;
        margin: 2px auto 0 auto;
        background-color: inherit;
    }
    .textContent:hover{
         background-color:${({theme})=>theme.colors.bgcBody};
    }

    .actionButtonContainer{
        display: flex;
        justify-content: space-around;
    }
    .inputContainer button,
    label{
        background-color: inherit;
        color:${({theme})=>theme.colors.mainFontColor};
        border: none;
        padding: 2px 5px ;
        cursor: pointer;
        border-radius: 5px;
        margin: 0 5px 3px 5px;
        font-size: 16px;
        font-weight:500;
        font-family: inherit;
    }

`