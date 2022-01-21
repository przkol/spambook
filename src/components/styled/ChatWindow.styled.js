import styled from "styled-components";


export const StyledChatWindow=styled.div`
color:${({theme})=>theme.colors.mainFontColor};
.chatWindowOpened{
background-color:${({theme})=>theme.colors.bgcBody};
margin:0 5px;
display:flex;
flex-direction:column;
justify-content: space-between;
box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
height: 100%;
}

.chatWindowBubble .messages,
.chatWindowBubble .messageInput,
.chatWindowBubble .buttons{
    display:none;
}

div.chatWindowBubble{
    color:${({theme})=>theme.colors.mainFontColor};
    margin:0 5px;
}
div.chatWindowBubble:hover,
button:hover{
    cursor:pointer;
}

.windowHeader{
background-color: ${({theme})=>theme.colors.bgcShade1};

display:flex;
justify-content:space-between;
padding: 3px;
}
.windowHeader h3{
    flex-grow:1;
font-size:${({theme})=>theme.fonts.mainFontSize};

}
.windowHeader button{
    width: 20px;
    margin: 2px;
}

.messageInput{
padding:3px;
}
.messages{
    flex-grow: 1;
overflow-y:scroll;
}

.msg{
    width:100%;
    margin: 3px 0;
}
.msg p{
    max-width:75%;
    padding:3px 10px;
    border-radius:15px;
    word-break: break-word;
    white-space: normal;
    width:fit-content;

}

.friendMsg{
    background-color: ${({theme})=>theme.colors.bgcShade1};
    margin:3px auto 3px 3px;
}

.userMsg{
    background-color: ${({theme})=>theme.colors.bgcShade2};
    margin:3px 3px 3px auto;
}


@media(min-width:769px){
width:30vw;
max-width:250px;
.chatWindowOpened{
    height: 35vh;
    max-height: 400px;
}
}


`