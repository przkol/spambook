import styled from "styled-components";

export const StyledAddGroupForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    color:${({ theme }) => theme.colors.mainFontColor};
    overflow: hidden;
    background-color:${({ theme }) => theme.colors.bgcFeed};
    box-shadow: 0 1px 2px ${({ theme }) => theme.colors.bgcShade1};
    padding: 5%;

label,input{
    display: block;
}
label,p{
    margin-top: 15px;
}
input{
    margin-top: 5px;
}
.uploadContainer{
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.uploadContainer img{
    height: 90%;
    margin:5px 10px;
}

input[type=checkbox]{
    display: inline;
}
input[type=file]{
    display: none;
}
svg{font-size:2rem}
svg:hover{
    cursor: pointer;
}
.warning{
    color:${({ theme }) => theme.colors.elegantRed};
    margin-top: 2px;
    font-size:12px;
    opacity: 0;
    transition: .2s;
}

.submitted .warning.visible{
    opacity: 1;
}
input{
    line-height: 20px;
    height: 25px;
    border-radius: 5px;
    border: none;
    padding-left: 3px;
    background-color: ${({ theme }) => theme.colors.bgcShade1};
    color: ${({ theme }) => theme.colors.mainFontColor};
}

input[type=text]{
    min-width:250px;
}

    input[type=submit]{
        height: 30px;
        background-color: inherit;
        color:${({ theme }) => theme.colors.mainFontColor};
        border: 1px solid ${({ theme }) => theme.colors.mainFontColor};
        padding: 5px 5px;
        border-radius: 5px;
        margin: 0 5px 3px 5px;
        font-size: 16px;
        font-weight:500;
        font-family: inherit;
        transition: .2s;
}
input[type=submit]:hover{
    color:${({ theme }) => theme.colors.contrastFontColor};
    border: 1px solid ${({ theme }) => theme.colors.mainFontColor};
    background-color: ${({ theme }) => theme.colors.mainFontColor};
    cursor: pointer;
}
.deletePhoto{
    display: block;
    width: 20px;
    height: 20px;
    line-height: 15px;
    text-align: center;
    border-radius: 50%;
    background-color:${({ theme }) => theme.colors.bgcShade1};
    }

    .deletePhoto:hover{
        cursor: pointer;
    }



`