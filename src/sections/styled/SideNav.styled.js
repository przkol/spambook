import styled from "styled-components";


export const StyledSideNav=styled.nav`

width:20%;
background-color: #593AE0;
height: fit-content;

a{
    display: block;
    text-decoration: none;
    width: 100%;
    font-size: 18px;
    padding: 5px 10px;
    font-weight: 500;
    transition: .2s;
}
a:hover{
    background-color: #593AA0;
    padding-left:30px;
}

.selected{
    color: red;
}
`

