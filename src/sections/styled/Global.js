import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    margin-block: 0;
    margin-inline: 0;

}

body{
    background-color: ${({ theme }) => theme.colors.bgcBody};
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fonts.mainFontFamily};
    font-size:${({ theme }) => theme.fonts.mainFontSize};
}



main{
    width: 100%;
    max-width: 600px;
    margin: 3.5rem auto 1rem auto;
    background-color: ${({ theme }) => theme.colors.bgcBody};
    overflow: auto;
    z-index: 0;
    padding:2px ;


}
.no-scroll{
    overflow: hidden;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: ${({ theme }) => theme.colors.mainFontColor};
  opacity: 1; /* Firefox */
}

@media(min-width:769px){
    main{
    width: 45%;
    max-width: 600px;
    }
}

@media(min-width:992px){
    main{
    width: 50%;
    }
}
`

export default GlobalStyles