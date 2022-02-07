import styled from "styled-components";


export const StyledThemeToggler = styled.div`
margin: 10px auto;
line-height: 2.2rem;
color: ${({ theme }) => theme.colors.mainFontColor};
transition: .2s;
text-align: center;
border-radius: 50%;
transition: .2s;
display: flex;
width: 150px;

svg{
    margin: auto 15px ;
    font-size:${({ theme }) => theme.fonts.iconsFontSize};

}

&:hover{
    cursor: pointer;

}


@media(min-width:769px){
 margin-left: 5px;
}

`