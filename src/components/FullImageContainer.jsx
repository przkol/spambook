import { imgHandlerContext } from "../App";
import { useContext } from "react";






export const FullImageContainer=(props)=>{
const openFullImg=useContext(imgHandlerContext)

    return(
        <div className="bodyCover"> 
            <span className="closeImgPopup" onClick={()=>openFullImg(false)}>X</span>
            <div className="fullImgContainer">
                <img className="fullImg" src={props.src} alt="popup" />
            </div>
        </div>
    )
}
