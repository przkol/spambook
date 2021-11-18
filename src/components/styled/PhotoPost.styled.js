import styled from "styled-components";

export const StyledPhotoPost = styled.div`
    width: 95%;
    border: 2px solid #7960E6;
    border-radius: 10px;
    margin: 5px auto;


    .postHeader{
        display: flex;
        width: 100%;
        height: 50px;
        padding: 5px;
        border-bottom: 1px solid #7960E6;
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
    }

    .postContent{
        width: 100%;
        height: 95%;
        padding: 5px 10px;
    }

    .postedPhoto{
        height: 80%;
        max-height: 200px;
        margin: 5px auto;
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
    }
    .actionContainer>button{
        width: 50%;
        font-size: 16px;
        flex-grow: .5;
        background-color: #7960E6;
        border: none;
        padding: 5px 0 ;
        cursor: pointer;
    }

    .actionContainer>button:hover,
    .actionContainer>button.liked{
        font-weight:600;
        background-color: #7930E1;
    }

    .comment{
        padding: 5px;
    }

    .invisible{
        display: none;
    }
    .commentHeader{
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 14px;
    }
    .commentHeader img{
        height: 80%;
        border-radius: 50%;
        margin-right: 5px;
    }
    .yourComment>.commentHeader{
        font-weight:600;
    }


`

