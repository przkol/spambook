import styled from "styled-components";

export const StyledHeader = styled.header`
margin: 0 auto;
background-color:${({theme})=>theme.colors.bgcHeader};
width: 100%;
margin-bottom:5px;
color:white;
height: fit-content;

h1{
    display: none;
    padding: 0 5px;
}
.mainUserInfo{
    display: none;

}
h1:hover{
    padding-left:10px; 
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
    display:flex;
    justify-content: space-between;
    height: 3rem;
    h1{
        display: block;
    }
    .mainUserInfo{
        display: flex;
        flex-wrap: nowrap;
    }
    }
`