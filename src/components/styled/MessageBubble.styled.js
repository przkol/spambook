import styled from "styled-components";


export const StyledMessageBubble = styled.div`

    width:100%;
    margin-top: 3px;
        div{
    max-width:75%;
    border-radius:10px;
    word-break: break-word;
    white-space: normal;
    width:fit-content;
    overflow: hidden;
    }

    img{
    display: block;
    max-width: 100%;
    height: 100%;
}

    img:hover{
    cursor: pointer;
    }
 p{
    width: 100%;
    padding: 5px 7px;
}
.friendMsg{
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    margin:3px auto 3px 7px;
}
.userMsg{
    background-color: ${({ theme }) => theme.colors.bgcShade2};
    margin:3px 7px 0 auto;
    height:100%
}

`