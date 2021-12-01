import styled from "styled-components";

export const StyledGroupCard = styled.div`
    background-color: #301561;
    width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px;
    border-radius: 5px;
    overflow: hidden;

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
        padding: 5px;
    }



`