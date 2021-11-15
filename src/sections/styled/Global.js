import { createGlobalStyle } from "styled-components";


const GlobalStyles=createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    color:whitesmoke;

    margin-block: 0;
    margin-inline: 0;
}

body{
    background-color: #301561;
    width:75%;
    overflow: hidden;
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: space-between;
}
`

export default GlobalStyles