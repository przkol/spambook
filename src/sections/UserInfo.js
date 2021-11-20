import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledUserInfo } from "./styled/UserInfo.styled";

const UserInfo=()=>{
    const [userDetails,setUserDetails]=useState()
    const [edittingBaseInfo,setEdittingBaseInfo]=useState(false)
    const [edittingContactInfo,setEdittingContactInfo]=useState(false)
    const [edittingAddressInfo,setEdittingAddressInfo]=useState(false)
const mainUser=useSelector(state=>state.mainUserReducer)
const {userInfo}=mainUser


const handleEdit=(e)=>{
    e.preventDefault()
    setUserDetails(userInfo)
    const sectionToEdit=e.target.getAttribute('section')
    switch(sectionToEdit){
        case('baseInfo'):
        setEdittingBaseInfo(prevState=>!prevState)
        break;
        case('contactInfo'):
        setEdittingContactInfo(prevState=>!prevState)
        break;
        case('addressInfo'):
        setEdittingAddressInfo(prevState=>!prevState)
        break;

        default: return
    }

}





if(mainUser.loaded){
    return(     
    <StyledUserInfo className={mainUser.loaded ? 'userInfo active' : 'userInfo'}>
        <div className='profilePicture'>
            <img src={userInfo.picture.large} alt=''/>
            </div>
        <div className='baseInfo'>
            <div><h4>Basic information:</h4><button section='baseInfo' onClick={handleEdit}>Edit</button></div>
            <div><p>Gender:</p>{edittingBaseInfo ? <input value={userDetails.gender}/>     :<p>{userInfo.gender}</p>}</div> 
            <div><p>First name:</p><p>{userInfo.name.first}</p></div> 
            <div><p>Last name:</p><p>{userInfo.name.last}</p></div> 
            <div><p>Gender:</p><p>{userInfo.gender}</p></div> 
            <div><p>Date of Birth:</p><p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p></div> 
            </div>
        <div className='contactInfo'>
            <div><h4>Contact information:</h4><button section='contactInfo' onClick={handleEdit}>Edit</button></div>
            <div><p>E-mail address:</p>{edittingContactInfo ? <input value={userInfo.email}/>:<p>{userInfo.email}</p>} </div> 
            <div><p>Phone No.:</p><p>{userInfo.phone}</p> </div> 
            <div><p>Cell No.:</p><p>{userInfo.cell}</p> </div> 
            </div>
        <div className='addressInfo'>
            <div><h4>Address:</h4><button section='addressInfo' onClick={handleEdit}>Edit</button></div>
            <div><p>Street:</p>{edittingAddressInfo ? <><input value={userInfo.location.street.name}/><input value={userInfo.location.street.number}/> </>    :<p>{userInfo.location.street.name} {userInfo.location.street.number}</p>}</div> 
            <div><p>City:</p><p>{userInfo.location.city}</p></div> 
            <div><p>State:</p><p>{userInfo.location.state}</p></div> 
            <div><p>Postcode:</p><p>{userInfo.location.postcode}</p></div> 
            <div><p>Country:</p><p>{userInfo.location.country}</p></div> 
            </div>
        
    </StyledUserInfo>)
}
else{return <p>Loading...</p>}}




export default UserInfo