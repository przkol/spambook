import { imgHandlerContext } from "../App";
import { useContext } from "react";
import { StyledFullImageContainer } from "./styled/FullImageContainer.styled";






export const FullImageContainer=(props)=>{
const openFullImg=useContext(imgHandlerContext)

    return(
        <StyledFullImageContainer> 
            <div className="backCover"></div>
            <span className="closeImgPopup" onClick={()=>openFullImg(false)}>X</span>
            <div className="fullImgContainer">
                <img className="fullImg" src={props.src} alt="popup" />
            </div>
        </StyledFullImageContainer>
    )
}
