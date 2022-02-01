import styled from "styled-components";


export const StyledThemeToggler = styled.div`
margin: 10px auto;
width: 2.2rem;
line-height: 2.2rem;
font-size:${({ theme }) => theme.fonts.iconsFontSize};
color: ${({ theme }) => theme.colors.mainFontColor};
background-color:inherit;
transition: .2s;
text-align: center;
border-radius: 50%;

svg{
    margin: auto 0 ;
}

&:hover{
    color: ${({ theme }) => theme.colors.contrastFontColor};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgcShade2};

}


@media(min-width:769px){
 margin-left: 5px;
}

`