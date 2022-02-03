import styled from "styled-components";


export const StyledChatWindow = styled.div`
color:${({ theme }) => theme.colors.mainFontColor};

.chatWindowOpened{
background-color:${({ theme }) => theme.colors.bgcBody};
margin:0 5px;
display:flex;
flex-direction:column;
justify-content: space-between;
box-shadow: 0 1px 2px ${({ theme }) => theme.colors.bgcShade1};
height: 100%;
min-height: 270px;
}

.chatWindowBubble .messages,
.chatWindowBubble .messageInput,
.chatWindowBubble .buttons,
.chatWindowBubble .windowHeader{
    display:none;
}

div.chatWindowBubble:hover{
    cursor:pointer;
}

.chatWindowOpened .chatBubble{
    display: none;
}
.chatBubble{
    position: relative;
    color: #FFF;
    margin: 0 5px;
}
.chatBubble img{
    height: 3.5rem;
}
.chatBubble h4{
    position: absolute;
    bottom: 5%;
    right: 5%;
    background-color:${({ theme }) => theme.colors.elegantRed};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    text-align: center;
    margin: auto 0;
    line-height: 1rem;
}


.buttons button,
.messageInput button{
    border: none;
    border-radius: 5px;
    color:${({ theme }) => theme.colors.mainFontColor};
    background-color: inherit;
    font-weight:bold;
    font-size:1.1rem;
    width: 20px;
    margin: 0 3px;
}
#fileInputLabel{
    max-width: 20px;
    font-size:1.1rem;
    margin-left:4px;
}

button:hover,
#fileInputLabel:hover{
    cursor:pointer;

}
.windowHeader{
background-color: ${({ theme }) => theme.colors.bgcShade1};
display:flex;
justify-content:space-between;
padding: 3px;
}
.windowHeader:hover{
    cursor: pointer;
}
.windowHeader h3{
    flex-grow:.9;
    font-size:${({ theme }) => theme.fonts.mainFontSize};
    margin: auto 5px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis
}
h4{
    margin: auto;
}
.windowHeader button{
    width: 20px;
    height: 20px;
    margin: auto 2px;
}
.buttons{
   min-width: fit-content;
   height: 100%;
}

.messageInput{
padding:3px;
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.bgcFeed};
border-top: 1px solid ${({ theme }) => theme.colors.bgcShade1};
}
.uploadedImgContainer{
width: 100%;
height: 40px;
display: flex;
justify-content: end;
}

.deletePhoto{
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 15px;
    border-radius: 50%;
    background-color:${({ theme }) => theme.colors.bgcShade1};
    margin:10px 2px;
    }
    .deletePhoto:hover{
        cursor: pointer;
    }
.uploadedImgContainer img{
    height:40px;
    border-radius: 5px;
}
.messageInputContainer{
    display: flex;
}

label{
    flex-grow: 1;
}
input{
    width: 100%;
    line-height: 20px;
    height: 25px;
    border-radius: 5px;
    border: none;
    padding-left: 3px;
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    color: ${({ theme }) => theme.colors.mainFontColor};
}
input[type=file]{
    display: none;
}
.messages{
    flex-grow: 1;
overflow-y:auto;
}

.msg{
    width:100%;
    margin-bottom: 5px;
}
.msg div{
    max-width:75%;
    border-radius:15px;
    word-break: break-word;
    white-space: normal;
    width:fit-content;
    overflow: hidden;
}
.msg img{
    display: block;
    max-width: 100%;
    height: 100%;}
.msg img:hover{
    cursor: pointer;
}
.msg p{
    margin: 5px 7px;
}

.windowHeader img{
    height: 2rem;
    border-radius: 50%;


}
.friendMsg{
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    margin:3px auto 3px 3px;
}

.userMsg{
    background-color: ${({ theme }) => theme.colors.bgcShade2};
    margin:3px 3px 0 auto;
height:100%}



@media(min-width:769px){
.chatWindowOpened{
    height: 35vh;
    max-height: 400px;
    width:30vw;
    max-width:250px;
}
}


`