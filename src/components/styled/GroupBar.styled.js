import  styled  from 'styled-components';


export const StyledGroupBar = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width: 100%;
a{
    display: block;
    text-decoration: none;
    width: 90%;
    height:100%
    font-size: 16px;
    padding: 5px 0px 5px 6px;
    font-weight: 400;
    transition: .2s;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis
}
a:hover{
    background-color: #593AA0;
    padding-left:10px;
}

.selected{
    color: red;
}

span{
    background:red;
    font-size:12px;
    border-radius:50%;
    display: block;
    width: 20px;
    height: 20px;
    text-align:center;
    margin-right:2px;
}
`
