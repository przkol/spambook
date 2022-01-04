import styled from "styled-components";


export const StyledChatWindow=styled.div`
background-color:grey;
width:270px;
height: 400px;
margin:0 5px;
display:flex;
flex-direction:column;

.windowHeader{
background-color: darkgrey;
display:flex;
justify-content:space-between;
padding: 3px;
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