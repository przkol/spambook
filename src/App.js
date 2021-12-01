import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';
import { Route,Routes } from 'react-router-dom';
import UserInfo from './sections/UserInfo';
import { fetchPhoto } from "./reducers/actions/photoActions"
import { useDispatch,useSelector } from "react-redux"
import { fetchJoke } from "./reducers/actions/jokeActions"
import { ADD_POST } from './reducers/actions/postActions';
import { PostInput } from './components/PostInput';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Groups from './sections/Groups';

function App(props) {
  const dispatch=useDispatch()
  const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
  const jokeReactions=['ROFL','hahahaha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic you!` ]
  const mainUserState = useSelector(state =>state.mainUserReducer)
  
  
  const contentPicker=()=>{
    const randomizer=Math.floor(Math.random()*20)

    if(randomizer<10){ 
        return dispatch(fetchJoke)}
    else if(randomizer>=10){ 
        return dispatch(fetchPhoto)}
  }

  const generateFeed=(type)=>{
      const comments=[]
      for(let i=0;i<10;i++){
          const randomNumber=Math.floor(Math.random()*10)
          if(randomNumber<=5){
          const newComment={
              person:props.friends[Math.floor(Math.random()*20)],
              comment: (type==='photo'?
                  photoReactions[Math.floor(Math.random()*photoReactions.length)] 
                  :
                  jokeReactions[Math.floor(Math.random()*jokeReactions.length)] 
              )
          }
          comments.push(newComment)}
      }
      const newPost=type==='joke'?
          {user:props.friends[Math.floor(Math.random()*20)],
          joke:props.jokes,
          type:'joke',
          comments:comments,
          likes: (Math.floor(Math.random()*25)+3),
          liked:false,
          showComments: false
      }
          :
          {user:props.friends[Math.floor(Math.random()*20)],
          photo:props.photos,
          type:'photo',
          comments:comments,
          likes: (Math.floor(Math.random()*25)+3),
          liked:false,
          showComments: false
          }
      dispatch(ADD_POST(newPost))
  }



useEffect(()=>{
  contentPicker()
  const contentPickerInterval = setInterval(() => {contentPicker()
  }, 15000);
  return () => {
    clearTimeout(contentPickerInterval);
  };
},[])

useEffect(()=>{
  if(props.photos&&props.friends[0]){
  generateFeed('photo')}
},[props.photos,props.friends])

useEffect(()=>{
  if(props.jokes&&props.friends[0]){
  generateFeed('joke')
  }
},[props.jokes,props.friends])



  return (
<>
  <GlobalStyles/>
  <Header/>

  <main>
    <SideNav/>
    <section className='wrapper'>
    <Routes>
  <Route  path='/' element={<><PostInput mainUser={mainUserState.userInfo}/><Feed/></>} />
  <Route  path='/user' element={<UserInfo/>} />
  <Route  path='/groups' element={<Groups/>} />
  </Routes>
    </section>
    <SideChat/>
  </main>

</>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
      photos: state.photoReducer.photoToAdd,
      jokes: state.jokeReducer,
      friends:state.friendsReducer
  };
}


export default connect(mapStateToProps)(App);
