import styled from "styled-components";


export const StyledChatBar=styled.div`
direction: ltr;
display:flex;
width:100%;
max-width: 205px;
margin: 5px auto;
white-space: nowrap;
text-overflow:ellipsis;
overflow:hidden;
.nameAndPreviewContainer{
    width: 85%;
    padding-right: 5px;

}
p{
    width: 100%;
    white-space: nowrap;
text-overflow:ellipsis;
overflow:hidden;
}
img{
    border-radius: 50%;
    width: 15%;
    margin: auto 3px;
}
.name{
font-size:${({theme})=>theme.fonts.smallFontSize} ;
font-weight: bold;
}
.bold{
    font-weight:bold;
}
`