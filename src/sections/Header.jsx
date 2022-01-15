import { useState, useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchMainUserInfo } from "../reducers/actions/mainUserActions"
import { StyledHeader } from "./styled/Header.styled"
import placeholder from '../img/placeholder.png'
import {useNavigate} from 'react-router-dom'
import { MobileNav } from "../components/MobileNav"

const Header=()=>{
    const [mainUser, setMainUser] = useState('Jan')
    const mainUserState = useSelector(state =>state.mainUserReducer)
    const dispatch=useDispatch()
    const navigate=useNavigate()


    useEffect(()=> {
        dispatch(fetchMainUserInfo)
        },[dispatch])
    
    useEffect(()=>{
        setMainUser(mainUserState)
    },[mainUserState])

    const redirectToUserPanel=()=>{
       navigate('/user')
    }
    
    const redirectToMainPage=()=>{
        navigate('/')
     }

    return(
        <StyledHeader >
            <h1 onClick={redirectToMainPage} >SpamBook</h1>
            <MobileNav/>

            <div className='mainUserinfo' onClick={redirectToUserPanel}>
                {mainUser.loaded ?
                <h2> Witaj, {mainUser.userInfo.name.first +' '+ mainUser.userInfo.name.last}</h2>
                :<h2>Witaj!</h2>}
                {mainUser.loaded ? 
                <img src={mainUser.userInfo.picture.thumbnail} alt={mainUser.userInfo.name.first+`'s profile picture`}/>
                :<img src={placeholder} alt='placeholder'/>}
            </div>

        </StyledHeader>
    )


}

export default Header