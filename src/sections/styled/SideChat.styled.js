import styled from "styled-components";

export const StyledSideChat = styled.div`

color:${({ theme }) => theme.colors.mainFontColor};
background-color:${({ theme }) => theme.colors.bgcBody};
width: 100%;
overflow: auto;
height: 100%;
margin: 0 auto;


.friendsList{
    width:80%;
    max-width: 250px;
    margin:0 auto;
    }
h3{
    text-align: center;
    padding-left:10px;
    font-size:${({ theme }) => theme.fonts.headerFontSize};
}

input{
    display: block;
    width: 75%;
    max-width: 220px;

    line-height: 20px;
    height: 25px;
    border-radius: 5px;
    border: none;
    padding-left: 3px;
    margin: 5px auto;
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    color: ${({ theme }) => theme.colors.mainFontColor};
}
@media(min-width:769px){
    position: fixed;
    right: 0;
    width: 30%;
    max-width: 200px;
    max-height: 85vh;

    .friendsList{
        width: 100%;
    }
    input{
    width: 90%;

    }

}
`