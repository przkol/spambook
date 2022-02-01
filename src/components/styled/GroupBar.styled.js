import  styled  from 'styled-components';


export const StyledGroupBar = styled.div`
position: relative;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
width: 300px;
margin: 3px auto 0 auto;


&:hover{
    background-color: ${({theme})=>theme.colors.bgcShade1};
    padding-left:10px; 
}

a{
    display: block;
    text-decoration: none;
    border-radius: 10px;
    height:100%;
    font-size: 16px;
    padding: 5px 0px 5px 6px;
    font-weight: 400;
    transition: .2s;
    white-space: nowrap;
    overflow:hidden;
    color:${({theme})=>theme.colors.mainFontColor};
    text-overflow:ellipsis;
    margin: 0 auto;
}

span{
    background-color:${({theme})=>theme.colors.elegantRed};
    color:white;
    font-size:12px;
    font-weight:500;
    font-family:inherit;
    border-radius:50%;
    display: block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    text-align:center;
    margin-right:3px;
}

@media(min-width:769px){
width: 100%;
max-width: 600px;
margin: 3px 0 0 0 ;
justify-content: space-between;
a{
    margin-left: 0;
}
}
`
