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

    button{
        color: black;
    }

`