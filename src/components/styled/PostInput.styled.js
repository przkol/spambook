import styled from "styled-components";


export const StyledPostInput = styled.div`

    width: 100%;
    border: 2px solid #7960E6;
    border-radius: 10px;
    margin-bottom: 10px;

    .postHeader{
        display: flex;
        width: 100%;
        height: 50px;
        padding: 5px;
        border-bottom: 1px solid #7960E6;
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
    }

    .inputContainer>img{
        height: 50px;
    }
    #fileInput{
        display: none;
    }
    .textContent{
        width: 100%;
        resize:none;
        height: 100px;
        color: black;
    }

    .actionButtonContainer{
        display: flex;
        justify-content: space-around;
    }
    .inputContainer button,
    label{
        background-color: #7960E6;
        border: none;
        padding: 2px 5px ;
        cursor: pointer;
        border-radius: 5px;
        margin: 0 5px 3px 5px;
        font-size: 16px;
    }

`