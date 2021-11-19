import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';
import { Route,Routes } from 'react-router-dom';
import UserInfo from './sections/UserInfo';



function App() {

  return (
<>
  <GlobalStyles/>
  <Header/>
  <main>
  <SideNav/>
  <Routes>
  <Route  path='/' element={<Feed/>} />
  <Route  path='/user' element={<UserInfo/>} />
  </Routes>
  <SideChat/>
  </main>

</>
  );
}

export default App;
