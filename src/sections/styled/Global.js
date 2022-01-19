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
    font-size:${({theme})=>theme.fonts.mainFontSize};
}

.overLay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.asidesContainer{
    display: flex;
    justify-content: space-between;
}


main{
margin-top: 3rem;
}
.wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    padding: 1%;
    height: fit-content;
    min-height: 75vh;
    margin: 0 auto;
}
.no-scroll{
    overflow: hidden;
}



@media(min-width:769px){
    .wrapper{
    width: 50%;
    max-width: 600px;
    }
    
    }
`

export default GlobalStyles