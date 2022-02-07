import styled from "styled-components";


export const StyledChatBar = styled.div`
direction: ltr;
display:flex;
width:100%;
margin: 0 auto;
padding:5px 0;
white-space: nowrap;
text-overflow:ellipsis;
overflow:hidden;
position: relative;

&:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgcShade1};
}
&.active{
    background-color: ${({ theme }) => theme.colors.bgcShade1};

}
.nameAndPreviewContainer{
    width: 100%;
    padding-right: 5px;
    margin-left: 5px;
}
p{
    width: 100%;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
img{
    border-radius: 50%;
    width: 40px;
}
.convoActiveImg{
    margin: auto;
}
.listActiveImg{
    margin-left: 5px;
}
span{
    display: inline-block;
    background-color:${({ theme }) => theme.colors.elegantRed};
    color:#EEE;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    text-align: center;
    margin: auto 0;
    line-height: 1rem;
}
span.bubbleSpan{
    position: absolute;
    bottom: 5%;
    right: 5%;
}



.name{
    font-weight: bold;
}
.messagePreview{
font-size:${({ theme }) => theme.fonts.smallFontSize} ;

}
.bold{
    font-weight:bold;
}
`