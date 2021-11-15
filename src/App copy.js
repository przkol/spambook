
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {fetchJoke,fetchMainUserInfo, fetchUsersDetails, fetchUsersNames} from './reducers/actions/actions'



function App() {
  const dispatch = useDispatch()
  const joke = useSelector(state =>state.jokeReducer)
  const mainUser = useSelector(state =>state.userReducer)
  const userList = useSelector(state =>state.userReducer)
  // const UserDetailList = useSelector(state =>state.userReducer)



const handleClick=(e)=>{
e.preventDefault();
dispatch(fetchMainUserInfo)
}
const handleClick2=(e)=>{
  e.preventDefault();
  dispatch(fetchJoke)
  }
const handleClick3=(e)=>{
  e.preventDefault();
  dispatch(fetchUsersNames)
  }
const handleClick4=(e)=>{
  e.preventDefault();
  dispatch(fetchUsersDetails)
  }
  
  return (
    <>
    <button onClick={handleClick}>Testuj funkcje użytnika głównego</button>
    <button onClick={handleClick2}>Testuj funkcje żartu</button>
    <button onClick={handleClick3}>Testuj funkcje listy użytników</button>
    <button onClick={handleClick4}>Testuj funkcje szczegółowych użytników</button>

    <div>
      <p> {joke.setup}</p>   
      <p> {joke.delivery}</p>   
    </div>

    <div><p>{mainUser.name}</p></div>

    <div> {userList}</div>

    </>

  );
}

export default App;
