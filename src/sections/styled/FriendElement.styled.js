import  styled  from 'styled-components';


export const StyledFriendElement = styled.div`

display: flex;
justify-content: safe;
width: 100%;
height: 30px;
margin: 2px 0;


&:hover{
    background-color: #442DAD;
    cursor: pointer;
}
p{
color:whitesmoke;
margin: auto 0;
flex-grow: 1;
}
p:hover{
    font-weight:700;
}
img{
    border-radius:50%;
    margin: 0 10px;
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