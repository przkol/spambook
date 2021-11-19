import styled from "styled-components"

export const StyledUserInfo=styled.section`
width: 45%;
height: fit-content;
background-color: #593AE0;
border-radius: 10px;
margin-top: 10px;
padding: 10px;


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
    background-color:#301561;
    padding: 5px;
    margin: 5px 0 ;
    border-radius: 10px;

}

.baseInfo div,
.contactInfo div,
.addressInfo div{
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 5px auto;
    border-bottom: 1px solid grey;
}

.baseInfo div p:nth-of-type(1),
.contactInfo div p:nth-of-type(1),
.addressInfo div p:nth-of-type(1){
width: 30%;
}


.baseInfo div p:nth-of-type(2),
.contactInfo div p:nth-of-type(2),
.addressInfo div p:nth-of-type(2){
justify-self: center;
align-self: center;
}

button{
    border: 1px solid grey;
    padding: 2px 8px;
    background-color: #593AE0;
    margin-bottom: 2px;
    border-radius: 3px;
    height: 20px;
margin: auto 0 2px 0;
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