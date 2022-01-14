import  styled  from 'styled-components';


export const StyledGroupBar = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width: 100%;
border-radius: 10px;

&:hover{
    background-color: ${({theme})=>theme.colors.bgcShade1};
    padding-left:10px; 
}

a{
    display: block;
    text-decoration: none;
    border-radius: 10px;
    width: 90%;
    height:100%;
    font-size: 16px;
    padding: 5px 0px 5px 6px;
    font-weight: 400;
    transition: .2s;
    white-space: nowrap;
    overflow:hidden;
    color:${({theme})=>theme.colors.mainFontColor};
    text-overflow:ellipsis
}

span{
    background:red;
    color:white;
    font-size:12px;
    font-weight:500;
    font-family:inherit;
    border-radius:50%;
    display: block;
    width: 20px;
    line-height: 20px;
    text-align:center;
    margin-right:2px;
}
`
