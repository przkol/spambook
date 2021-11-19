import { useSelector } from "react-redux";
import { StyledUserInfo } from "./styled/UserInfo.styled";

const UserInfo=()=>{
const mainUser=useSelector(state=>state.mainUserReducer)
const {userInfo}=mainUser
console.log(userInfo)




if(mainUser.loaded){
    return(     
    <StyledUserInfo className={mainUser.loaded ? 'userInfo active' : 'userInfo'}>
        <div className='profilePicture'>
            <img src={userInfo.picture.large} alt=''/>
            </div>
        <div className='baseInfo'>
            <h4>Basic information:</h4>
            <div><p>Gender:</p><p>{userInfo.gender}</p><button>Edit</button></div> 
            <div><p>Name:</p><p>{userInfo.name.first+' '+userInfo.name.last}</p><button>Edit</button></div> 
            <div><p>Gender:</p><p>{userInfo.gender}</p><button>Edit</button></div> 
            <div><p>Date of Birth:</p><p>{userInfo.dob.date} ({userInfo.dob.age} y/o)</p><button>Edit</button></div> 
            </div>
        <div className='contactInfo'>
            <h4>Contact information:</h4>
            <div><p>E-mail address:</p><p>{userInfo.email}</p> <button>Edit</button></div> 
            <div><p>Phone No.:</p><p>{userInfo.phone}</p> <button>Edit</button></div> 
            <div><p>Cell No.:</p><p>{userInfo.cell}</p> <button>Edit</button></div> 
            </div>
        <div className='addressInfo'>
            <h4>Address:</h4>
            <div><p>Street and building No.:</p><p>{userInfo.location.street.name} {userInfo.location.street.number}</p> <button>Edit</button></div> 
            <div><p>City:</p><p>{userInfo.location.city}</p> <button>Edit</button></div> 
            <div><p>State:</p><p>{userInfo.location.state}</p> <button>Edit</button></div> 
            <div><p>Postcode:</p><p>{userInfo.location.postcode}</p> <button>Edit</button></div> 
            <div><p>Country:</p><p>{userInfo.location.country}</p> <button>Edit</button></div> 
            </div>
        
    </StyledUserInfo>)
}
else{return <p>Loading...</p>}}




export default UserInfo