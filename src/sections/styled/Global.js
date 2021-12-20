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
    width:1200px;
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: space-between;
}
.wrapper{
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: #593AE0;
    border-radius: 10px;
    padding: 1%;
    height: fit-content;
    min-height: 75vh;


}
`

export default GlobalStyles