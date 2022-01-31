import styled from "styled-components";

export const StyledAddGroupForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    color:${({theme})=>theme.colors.mainFontColor};
    overflow: hidden;
    background-color:${({theme})=>theme.colors.bgcFeed};
    box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};
    padding-left: 5%;

label,input{
    display: block;
}
label,p{
    margin-top: 15px;
}
input{
    margin-top: 5px;
}

input[type=checkbox]{
    display: inline;
}
input[type=file]{
    display: none;
}
svg{font-size:2rem}
`