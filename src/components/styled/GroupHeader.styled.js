import styled from "styled-components";

export const StyledGroupHeader = styled.div`
    width: 100%;
    height: 200px;
    overflow:hidden;
    border-radius:10px;
    margin-bottom: 10px;
    position: relative;

img{
    height:auto;
    width: 100%;
}
&:hover{
    cursor: pointer;
}

h2{
    position: absolute;
    margin: 3px auto;
    text-align: center;
    color:${({ theme }) => theme.colors.mainFontColor};
    background-color:${({ theme }) => theme.colors.bgcShade2}cc;
    padding: 5px 10px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    width: fit-content;
}

`