import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';



function App() {

  return (
  <>
  <GlobalStyles/>
   <Header/>
   <main>
     <SideNav/>
   <Feed/>
   <SideChat/>
   </main>

  </>
  );
}

export default App;
