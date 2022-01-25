import styled from "styled-components";


export const StyledChatBar=styled.div`
direction: ltr;
display:flex;
width:100%;
max-width: 205px;
margin: 0 auto;
padding:5px 0;
white-space: nowrap;
text-overflow:ellipsis;
overflow:hidden;

&:hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.bgcShade1};

}
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
}
.messagePreview{
font-size:${({theme})=>theme.fonts.smallFontSize} ;

}
.bold{
    font-weight:bold;
}
`