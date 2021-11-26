import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';
import { Route,Routes } from 'react-router-dom';
import UserInfo from './sections/UserInfo';
import { useSelector } from 'react-redux';
import { PostInput } from './components/PostInput';


function App() {
const postsFromStore=useSelector(state=>state.postsReducer)
  return (
<>
  <GlobalStyles/>
  <Header/>
  <main>
    <SideNav/>
    <section className='wrapper'>
    <Routes>
  <Route  path='/' element={<Feed/>} />
  <Route  path='/user' element={<UserInfo/>} />
  </Routes>
    </section>
    <SideChat/>
  </main>

</>
  );
}

export default App;
