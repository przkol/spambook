import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
top: 0;
margin: 0 auto;
background-color:${({theme})=>theme.colors.bgcHeader};
width: 100%;
margin-bottom:5px;
color:white;
height: 3rem;
display: flex;
justify-content: space-between;
align-items: center;

h1{
    padding: 0 15px;
}
.mainUserInfo *{
    display: none;
}
.mainUserInfo img{
    display: block;
}
h1:hover{
    cursor: pointer;
}

h2{
    margin: auto 0 auto 0;
    padding:10px 5px;
    font-size:${({theme})=>theme.fonts.headerFontSize};
}


img{
    margin: auto 0 auto 0;
    border-radius:50%;
    height: 80%;
    padding:0 5px;
}

div:hover{
    cursor: pointer;
}

@media(min-width:769px){
justify-content: space-between;
    h1{
        display: block;
    }
    .mainUserInfo{
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
    }
    }
`