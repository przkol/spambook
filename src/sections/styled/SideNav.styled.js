import styled from "styled-components";


export const StyledSideNav=styled.nav`

width:220px;
background-color: #593AE0;
height: fit-content;

>a,
>*>a{
    display: block;
    text-decoration: none;
    width: 100%;
    font-size: 20px;
    padding: 5px 8px;
    font-weight: 600;
    transition: .2s;
}
a:hover{
    background-color: #593AA0;
    padding-left:12px;
}

.selected{
    color: red;
}
`

