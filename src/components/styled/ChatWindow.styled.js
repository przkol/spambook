import styled from "styled-components";


export const StyledChatWindow=styled.div`
background-color:grey;
width:270px;
height: 400px;

.windowHeader{
background-color: darkgrey;
display:flex;
}

.msg{
    width:100%;
    margin: 3px 0;
}
.userMsg{
    text-align:right;
}

.userMsg p{
    background-color: royalblue;
    width:fit-content;
    max-width:75%;
    margin:0 3px 0 auto;
    padding:3px 10px;
    border-radius:15px;
    /* overflow:hidden; */

}




`