import styled from "styled-components";


export const StyledFullImageContainer=styled.div`
width: 100vw;
height:100vh;
position:fixed;
top:0;
left:0;
z-index:9;
.backCover{
    width:100vw;
    height:100vh;
    z-index:5;
    background-color: #111;
    opacity:0.98;
}

.fullImgContainer{
    z-index:10;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    overflow: hidden;
    text-align:center;
    max-width:100vw;
    max-height:100vh;
}

img{
    max-width:100%;
    height:100%;
}

     
.closeImgPopup{
    z-index:15;
    position:absolute;
    top:10%;
    right:10%;
    transform:translate(-50%,-50%);
    color:white;
    background-color:#222;
    box-sizing:content-box;
    width: 50px;
    line-height:50px;
    text-align:center;
    border-radius:50%;
    font-weight:normal;
    font-size:20px


}
.closeImgPopup:hover{
    cursor:pointer;
    background-color:#333;
    font-weight:600;

}


 `