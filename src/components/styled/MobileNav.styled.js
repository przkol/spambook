import styled from "styled-components";


export const StyledMobileNav=styled.nav`
position: absolute;
left: 50%;
transform: translateX(-50%);
display: flex;
justify-content: space-between;
font-size:${({theme})=>theme.fonts.iconsFontSize};
width: 50%;
align-items:center;
margin: 0 auto;

a{display:block;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;  
    color:${({theme})=>theme.colors.contrastFontColor};
    width: 30%;
}
svg{
    display:block;
    margin: 0 auto;
}



a:hover{
background-color:${({theme})=>theme.colors.bgcBody};
color:${({theme})=>theme.colors.mainFontColor};
cursor: pointer;
}
@media(min-width:769px){
    display: none;
}

.active{
    background-color:${({theme})=>theme.colors.bgcBody};
    color:${({theme})=>theme.colors.mainFontColor};
}

`