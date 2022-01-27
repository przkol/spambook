import styled from "styled-components";


export const StyledConvo=styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;


.convoHeader{
    display: flex;
    align-items: center;
}

.convoHeader img{
    margin:5px 10px;
    border-radius: 50%;
    width: 40px;
}
img.big{
    width: 40px;

    margin:2px auto;
    border-radius: 50%;
}
.convoHeader h3{
    margin-left: 10px;
}
.messages{
   width: 100%;
   height: 100%;
}

.friendMsg{
    background-color: ${({theme})=>theme.colors.bgcShade1};
    margin:3px auto 3px 3px;
}

.userMsg{
    background-color: ${({theme})=>theme.colors.bgcShade2};
    margin:3px 3px 3px auto;
}
.msg{
    width:100%;
    margin: 5px 0;
}
.msg p{
    max-width:75%;
    padding:3px 10px;
    border-radius:15px;
    word-break: break-word;
    white-space: normal;
    width:fit-content;
}
.messageInput{
padding:3px;
display: flex;
}
label{
    flex-grow: 1;
}
input{
    width: 100%;
    line-height: 20px;
    border-radius: 5px;
    border: none;
    padding-left: 3px;
    background-color: ${({theme})=>theme.colors.bgcShade1};
    color: ${({theme})=>theme.colors.mainFontColor};
}
.messageInput button{
    border: none;
    border-radius: 5px;
    color:${({theme})=>theme.colors.mainFontColor};
    background-color: inherit;
    font-weight:bold;
    font-size:1.1rem;
    margin: 0 3px;
}
button:hover{
    cursor:pointer;
    background-color:${({theme})=>theme.colors.mainFontColor};
    color:${({theme})=>theme.colors.bgcBody};
}
`