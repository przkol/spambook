import { useState, useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchMainUserInfo } from "../reducers/actions/mainUserActions"
import { StyledHeader } from "./styled/Header.styled"

const Header=()=>{
    const [mainUser, setMainUser] = useState('Jan')
    const mainUserState = useSelector(state =>state.mainUserReducer)
    const dispatch=useDispatch()
    
    useEffect(()=> {
        dispatch(fetchMainUserInfo)
        },[dispatch])
    
    useEffect(()=>{
        setMainUser(mainUserState)
    },[mainUserState])

    return(
        <StyledHeader>
            <h1>SpamBook</h1>
            <div>
            <h2> Witaj, {mainUser.name}!</h2>
                <img src={mainUser.thumbnail} alt={mainUser.name? mainUser.name+`'s profile picture`:''}/>
            </div>

        </StyledHeader>
    )


}

export default Header