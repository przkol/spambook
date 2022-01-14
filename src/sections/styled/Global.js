import { createGlobalStyle } from "styled-components";


const GlobalStyles=createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    margin-block: 0;
    margin-inline: 0;
    transition: .2s;
}

body{
    background-color: ${({theme})=>theme.colors.bgcBody};
    margin: 0 auto;
    font-family: ${({theme})=>theme.fonts.mainFontFamily};
}
main{
    display: flex;
    justify-content: space-between;
}
.wrapper{
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 680px;
    border-radius: 10px;
    padding: 1%;
    height: fit-content;
    min-height: 75vh;
}
.no-scroll{
    overflow: hidden;
}

`

export default GlobalStyles