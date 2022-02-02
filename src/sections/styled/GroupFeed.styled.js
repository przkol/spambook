import styled from "styled-components";



export const StyledGroupFeed = styled.section`
width: 100%;
margin-top: 10px;
font-size:${({ theme }) => theme.fonts.mainFontSize};
display: flex;
flex-direction: column-reverse;
.bgcPhotoContainer{
    width: 100%;
    height: 200px;
    overflow:hidden;
    border-radius:10px;

}
.bgcPhotoContainer>img{
    height:auto;
    width: 100%;
}


`