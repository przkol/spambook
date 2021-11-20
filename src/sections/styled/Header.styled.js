import styled from "styled-components";

export const StyledHeader = styled.header`
display:flex;
justify-content: space-between;
margin: 0 auto;
background-color:#7960E6;
width: 100%;

h1{
    padding: 0 5px;
}
h1:hover{
    background-color: #442DAD;
    cursor: pointer;
}

h2{
    margin: auto 0 auto 0;
    padding:10px 5px;

}
div{
    display: flex;
}

img{
    margin: auto 0 auto 0;
    border-radius:50%;
    height: 80%;
    padding:0 5px;
}

div:hover{
    background-color: #442DAD;
    cursor: pointer;
}

`