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


.asidesContainer{
position: fixed;
top:3rem;
width: 100%;
display: flex;
justify-content: space-between;
}

main{
    width: 100%;
    max-width: 600px;
    margin: 3.5rem auto;
    padding: 0 5px;
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