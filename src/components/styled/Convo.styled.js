import styled from "styled-components";


export const StyledConvo = styled.div`
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
   overflow: auto;
}


#fileInputLabel{
    max-width: 20px;
    font-size:1.1rem;
    margin-left:4px;
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
    .uploadedImgContainer{
width: 100%;
height: 60px;
display: flex;
justify-content: end;
margin-bottom: 5px;
}
.uploadedImgContainer img{
    height:60px;
    border-radius: 5px;
}
.messageInputContainer{
    display: flex;
    width: 100%;
}
input[type=file]{
    display: none;
}
.messageInput{
padding:3px;
display: flex;
flex-direction: column;
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
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    color: ${({ theme }) => theme.colors.mainFontColor};
}
input.msgInput{
    flex-grow: 1;
}
.messageInput button{
    border: none;
    border-radius: 5px;
    color:${({ theme }) => theme.colors.mainFontColor};
    background-color: inherit;
    font-weight:bold;
    font-size:1.1rem;
    margin: 0 3px;
}
#fileInputLabel{
    margin: 0 5px;
}
button:hover,
#fileInputLabel:hover{
    cursor:pointer;
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
    width: 100%;
    max-width: 250px;
    height: 100%;}
.msg img:hover{
    cursor: pointer;
}
.msg p{
    margin: 5px 7px;
}

`