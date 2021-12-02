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
import GroupFeed from './sections/GroupFeed';
import { useLocation } from "react-router";
import { fetchFootballHighlight, fetchProducts, ADD_GROUP_POST } from './reducers/actions/groupsActions';

function App(props) {
  const dispatch=useDispatch()
  const photoReactions=['Awww <3','I hate cats', 'Wow! Such a cutie!', 'I wonder how does it taste', 'I wish I had one *.*','dogs are better','Very handsome!']
  const jokeReactions=['ROFL','hahahaha','lool','man, just stop..', 'xDD','Sigh..','Man, how do you come up with those?', `haha, classic you!` ]
  const mainUserState = useSelector(state =>state.mainUserReducer)
  const location=useLocation()
  const shopItem=props.shop.shopItems

  const contentPicker=()=>{
  const randomizer=Math.floor(Math.random()*20)
  const randomizer2=Math.floor(Math.random()*20)
    if(randomizer<10){ 
      dispatch(fetchJoke)}
    else if(randomizer>=10){ 
      dispatch(fetchPhoto)}
    if(randomizer2<10){ 
      console.log('produkcik')
      dispatch(fetchProducts)}
    else if(randomizer2>=10){ 
      console.log('pileczka')
      dispatch(fetchFootballHighlight)}
  }

  const generateContent=(type)=>{
    const comments=[]
    for(let i=0;i<10;i++){
        const randomNumber=Math.floor(Math.random()*10)
        if(randomNumber<=5){
          const newComment={}

          switch(type){
            case('photo'):
              newComment.person=props.friends[Math.floor(Math.random()*20)]
              newComment.comment=photoReactions[Math.floor(Math.random()*photoReactions.length)]
              break;              
            case('joke'):
              newComment.person=props.friends[Math.floor(Math.random()*20)]
              newComment.comment=jokeReactions[Math.floor(Math.random()*jokeReactions.length)]
              break;
            case('football'):
              newComment.person=props.friends[Math.floor(Math.random()*20)]
              newComment.comment=jokeReactions[Math.floor(Math.random()*jokeReactions.length)]
              break;
            case('trade'):
              newComment.person=props.friends[Math.floor(Math.random()*20)]
              newComment.comment=jokeReactions[Math.floor(Math.random()*jokeReactions.length)]
              break;

            default: return
          }
          comments.push(newComment)
          }
      }
      
      
      let newPost={}
      switch(type){
        case('photo'):
          newPost={user:props.friends[Math.floor(Math.random()*20)],
            photo:props.photos,
            comments:comments,
            text:'OMG, check this cat out!',
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments: false
            }
            dispatch(ADD_POST(newPost))

          break;              
        case('joke'):
          newPost={user:props.friends[Math.floor(Math.random()*20)],
            photo:null,
            comments:comments,
            text:props.jokes,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments: false
            }
            dispatch(ADD_POST(newPost))
          break;
        case('football'):
          newPost={user:props.friends[Math.floor(Math.random()*20)],
            photo:props.footballHighlights.thumbnail,
            comments:comments,
            text:'Have you seen this match?',
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments: false
            }
            dispatch(ADD_GROUP_POST(newPost,2))
          break;
        case('trade'):
          newPost={user:props.friends[Math.floor(Math.random()*20)],
            photo:null,
            comments:comments,
            text:'Anyone?',
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments: false
            }
            dispatch(ADD_GROUP_POST(newPost,1))
          break;

        default: console.log(type)  
        }
  }



useEffect(()=>{
  contentPicker()
  // const contentPickerInterval = setInterval(() => {contentPicker()
  // }, 5000);
  // return () => {
  //   clearTimeout(contentPickerInterval);
  // };
},[])

useEffect(()=>{
  if(props.photos&&props.friends[0]){
  generateContent('photo')}
},[props.photos,props.friends])

useEffect(()=>{
  if(props.jokes&&props.friends[0]){
  generateContent('joke')
  }
},[props.jokes,props.friends])

useEffect(()=>{
  console.log(props.shop.shopItems)

  if(props.shop.shopItemsFlag&&props.friends[0]){
  generateContent('trade')
  console.log('trade')
  }
},[shopItem,props.friends])

useEffect(()=>{
  if(props.footballHighlights&&props.friends[0]){
  generateContent('football')
  }
},[props.footballHighlights,props.friends])



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
  <Route  path='/groups/' element={<Groups/>} />
  <Route  path='/groups/*' element={<GroupFeed groupIdToShow={location.pathname[location.pathname.length-1]}/>} />
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
      friends: state.friendsReducer,
      shop: state.groupsReducer,
      footballHighlights: state.groupsReducer.footballHighlights,
  };
}


export default connect(mapStateToProps)(App);
