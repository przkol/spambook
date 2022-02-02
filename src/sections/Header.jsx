import { useEffect, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMainUserInfo } from "../reducers/actions/mainUserActions"
import { StyledHeader } from "./styled/Header.styled"
import placeholder from '../img/placeholder.png'
import { useNavigate } from 'react-router-dom'
import { MobileNav } from "../components/MobileNav"
import { viewMobileMode } from "../App"
const Header = () => {
    const mainUserState = useSelector(state => state.mainUserReducer)
    const mobileModeFlag = useContext(viewMobileMode)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchMainUserInfo)
    }, [dispatch])

    const redirectToUserPanel = () => {
        navigate(`${mobileModeFlag ? '/m/user' : '/user'}`)
    }

    const redirectToMainPage = () => {
        navigate(`${mobileModeFlag ? '/m/' : '/'}`)
    }
    if (mobileModeFlag) {
        return (
            <StyledHeader >
                <h1 onClick={redirectToMainPage}>S</h1>
                <MobileNav />
                <div className='mainUserInfo' onClick={redirectToUserPanel}>
                    {mainUserState.loaded ?
                        <img src={mainUserState.userInfo.picture.thumbnail} alt={mainUserState.userInfo.name.first + `'s profile picture`} />
                        : <img src={placeholder} alt='placeholder' />}
                </div>
            </StyledHeader>
        )
    } else {
        return (<StyledHeader>
            <h1 onClick={redirectToMainPage}>SpamBook</h1>
            <div className='mainUserInfo' onClick={redirectToUserPanel}>
                {mainUserState.loaded ?
                    <h2> Hello, {mainUserState.userInfo.name.first + ' ' + mainUserState.userInfo.name.last}</h2>
                    : <h2>Hello</h2>}
                {mainUserState.loaded ?
                    <img src={mainUserState.userInfo.picture.thumbnail} alt={mainUserState.userInfo.name.first + `'s profile picture`} />
                    : <img src={placeholder} alt='placeholder' />}
            </div>
        </StyledHeader>
        )

    }


}

export default Header