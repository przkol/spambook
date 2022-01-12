import styled from "styled-components";


export const StyledChatWindow=styled.div`
    align-self:end;
.chatWindowOpened{
background-color:grey;
width:250px;
height: 350px;
margin:0 5px;
display:flex;
flex-direction:column;}

.chatWindowBubble .messages,
.chatWindowBubble .messageInput,
.chatWindowBubble .buttons{
    display:none;
}

div.chatWindowBubble{
    color:red;
    width:180px;
    margin:0 5px;
}
div.chatWindowBubble:hover,
button:hover{
    cursor:pointer;
}

.windowHeader{
background-color: darkgrey;
display:flex;
justify-content:space-between;
padding: 3px;
}
.windowHeader h3{
    flex-grow:1
}
.windowHeader button{
    width: 20px;
    margin: 2px;
}

.messageInput{
padding:3px;
}
.messages{
flex-grow:1;
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
    background-color: red;
    margin:3px auto 3px 3px;
}

.userMsg{
    background-color: royalblue;
    margin:3px 3px 3px auto;
}




`