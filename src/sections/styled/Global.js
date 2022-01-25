import { createGlobalStyle } from "styled-components";


const GlobalStyles=createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    margin-block: 0;
    margin-inline: 0;

}

body{
    background-color: ${({theme})=>theme.colors.bgcBody};
    margin: 0 auto;
    font-family: ${({theme})=>theme.fonts.mainFontFamily};
    font-size:${({theme})=>theme.fonts.mainFontSize};
}



main{
    width: 95%;
    max-width: 600px;
    margin: 3.5rem auto 0 auto;
    padding: 0 5px;
    background-color: ${({theme})=>theme.colors.bgcBody};
    overflow-anchor: auto;


}
.no-scroll{
    overflow: hidden;
}



@media(min-width:769px){
    main{
    width: 60%;
    max-width: 600px;
    }
    
    }
`

export default GlobalStyles