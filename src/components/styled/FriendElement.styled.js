import styled from 'styled-components';


export const StyledFriendElement = styled.div`

display: flex;
width: 100%;
height: 35px;
margin: 2px 0;
font-size: 14px;
padding: 2px 0;


&:hover{
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    padding-left:10px; 
    cursor: pointer;
    font-weight:600;
}
p{
color:${({ theme }) => theme.colors.mainFontColor};
margin: auto 0;
flex-grow: 1;
white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

}

img{
    border-radius:50%;
    margin: 0 10px;
    border: 1px solid white;
    box-sizing: content-box;

}

span{
    height: 10px;
    width: 10px;
    background-color:green;
    border-radius:50%;
    margin: auto 5px ;
    align-self: end;
}



`