
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {fetchJoke,fetchMainUserInfo} from './reducers/actions/actions'



function App() {
  const dispatch = useDispatch()
  const joke = useSelector(state =>state.jokeReducer)
  const mainUser = useSelector(state =>state.userReducer)



const handleClick=(e)=>{
e.preventDefault();
dispatch(fetchMainUserInfo)
}
const handleClick2=(e)=>{
  e.preventDefault();
  dispatch(fetchJoke)
  }
  
  return (
    <>
    <button onClick={handleClick}>Testuj funkcje użytnika</button>
    <button onClick={handleClick2}>Testuj funkcje żartu</button>

    <div>
      <p> {joke.setup}</p>   
      <p> {joke.delivery}</p>   
    </div>

    <div><p>{mainUser.name}</p></div>

    </>

  );
}

export default App;
