import styled from "styled-components";

export const StyledHeader = styled.header`
display:flex;
justify-content: space-between;
margin: 0 auto;
background-color:${({theme})=>theme.colors.bgcHeader};
width: 100%;
box-shadow: 0 3px 3px ${({theme})=>theme.colors.bgcHeader};
margin-bottom:5px;
color:white;

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