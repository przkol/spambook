import styled from "styled-components"

export const StyledUserInfo=styled.section`
width: 100%;
height: fit-content;
background-color: ${({theme})=>theme.colors.bgcFeed};
border-radius: 10px;
margin-top: 10px;
padding: 10px;
color:${({theme})=>theme.colors.mainFontColor};
box-shadow: 0 1px 2px ${({theme})=>theme.colors.bgcShade1};


.profilePicture{
    margin: 0 auto;
    width: fit-content;
}
img{
    margin: 0 auto;
    border-radius:50% 
}
.baseInfo,
.contactInfo,
.addressInfo{
    background-color: ${({theme})=>theme.colors.bgcBody};
    padding: 5px;
    margin: 5px 0 ;
    border-radius: 10px;
}

.baseInfo div,
.contactInfo div,
.addressInfo div{
    box-sizing: content-box;
    padding: 5px 0 2px 0;
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid ${({theme})=>theme.colors.bgcShade1};
}

.baseInfo div p:nth-of-type(1),
.contactInfo div p:nth-of-type(1),
.addressInfo div p:nth-of-type(1){
width: 30%;
}

.baseInfo div:last-of-type,
.contactInfo div:last-of-type,
.addressInfo div:last-of-type{

border: none;
}


.baseInfo div p:nth-of-type(2),
.contactInfo div p:nth-of-type(2),
.addressInfo div p:nth-of-type(2){
justify-self: center;
align-self: center;
}
.infoSection div:last-child{
    border: none;
}

button{
    border:none;
    background-color: ${({theme})=>theme.colors.bgcShade1};
    padding: 2px 0;
    margin-bottom: 2px;
    border-radius: 3px;
    height: 20px;
    width: 50px;
    margin: auto 0 2px 0;
    color: inherit;
}
button:hover{
    background-color: ${({theme})=>theme.colors.bgcShade2};
    cursor: pointer;

}
input{
    background-color: ${({theme})=>theme.colors.bgcFeed};
    border: 1px solid ${({theme})=>theme.colors.bgcShade1};
    border-radius: 3px;
    box-shadow: 0 0 2px  whitesmoke;
    color:inherit;
    padding: 2px;
    flex-grow: .5;
}

input[info2=number]{
    flex-grow: 0;
    width: 50px;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
input[type=email] {
    width: 250px;

}


.userInfo{
    color: red;
    transition: 2s;

}
.active{
    color: whitesmoke;
    transition: 2s;

}
`