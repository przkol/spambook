import styled from "styled-components";

export const StyledPost = styled.div`
    width: 100%;
    border-radius: 10px;
    color:${({ theme }) => theme.colors.mainFontColor};
    margin-bottom:15px;
    overflow: hidden;
    background-color:${({ theme }) => theme.colors.bgcFeed};
    box-shadow: 0 1px 2px ${({ theme }) => theme.colors.bgcShade1};
    transition:background-color .5s;

    div.invisible{
        display: none;
    }

    .postHeader{
        display: flex;
        width: 100%;
        height: 50px;
        padding: 5px;
        border-bottom-left-radius:10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.bgcShade1};
    }

    .postHeader:hover{
        cursor: pointer;
    }
    .postHeader>p{
        margin: auto 0 ;
        font-size: 14px;
    }
    span{
        font-size: 16px;
        font-weight: 600;
    }

    .postHeader img{
        border-radius:50%;
        margin: 0 10px;
        width: 2.5rem;
        height: 2.5rem;

    }

    .postContent{
        width: 100%;
        height: 95%;
        padding: 5px 15px;
    }

    .postedPhoto{
        max-width: 100%;
        max-height: 200px;
        margin: 5px auto;
    }
    .postedPhoto:hover{
        cursor: pointer;
    }

    .reactions{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        padding: 5px 0 ;
    }
    .reactions>p{
        width: 50%;
        text-align: center;
    }
    .actionContainer{
        display: flex;
        justify-content:space-around;
    }
    .actionContainer>button{
        width:100%;
        background-color: inherit;
        color:${({ theme }) => theme.colors.mainFontColor};
        border: none;
        border-radius:5px;
        padding: 5px 0 ;
        cursor: pointer;
        font-weight:500;
        font-size: 16px;
        font-family: inherit;

    }

    .actionContainer>button:hover{
        font-weight:600;
        background-color: ${({ theme }) => theme.colors.bgcShade2};
    }

    .commentHeader{
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 14px;
    }
    .yourComment>.commentHeader img{
        height: 90%;
        border-radius: 50%;
        margin-right: 5px;
    }
    .yourComment>.commentHeader{
        font-weight:600;
        margin-left: 5px;

    }
    .inputContainer{
        width: 100%;
        height: 30px;
        overflow: hidden;
        padding: 1px;
        display: flex;
    }
    input{
        background-color:  ${({ theme }) => theme.colors.bgcShade1};
        color:inherit;
        border: none;
        height: 20px;
        margin: 0 2px;
        border-radius: 5px;
        padding: 4px;
        flex-grow: 1;

    }
    .inputContainer>button{
        background-color:  ${({ theme }) => theme.colors.bgcShade1};
        color:inherit;
        border: none;
        padding: 2px 5px ;
        border-radius: 5px;
        margin: 0 5px 3px 5px;
        width:40px;
    }
    .inputContainer>button:hover{
        cursor: pointer;
        font-weight:bold;

    }

    
    a{
        display: block;
    }

   


`

