import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
top: 0;
margin: 0 auto;
background-color:${({ theme }) => theme.colors.bgcHeader};
width: 100%;
color:white;
height: 3rem;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 2;
border-bottom: 1px solid ${({ theme }) => theme.colors.bgcShade2};;

h1{
    padding: 0 15px;
}

.mainUserInfo{
    margin-right: 5px;
}
h1:hover{
    cursor: pointer;
}

h2{
    margin: auto 0 auto 0;
    padding:10px 5px;
    font-size:${({ theme }) => theme.fonts.headerFontSize};
}


img{
    display: block;
    margin: auto 0 auto 0;
    border-radius:50%;
    height: 2.5rem;
    width: 2.5rem;
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