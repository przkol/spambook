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
  const tradeReactions=["Daaamn, looks great. Wish I had the money..",`I'm interested - priv`, 'DM me later', 'Can you go any lower?']
  const footballReactions=['I watched it, it was painful...', `'Nic sie nie stało' as they say in polish`, 'Amazing!', 'At this point they should just disband the whole league..', 'Tough game, but satisfying to watch' ]
  const mainUserState = useSelector(state =>state.mainUserReducer)
  const location=useLocation()
  const shopItem=useSelector(state=>state.groupsReducer.shopItems)

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
    console.log(type)
    const comments=[]
    for(let i=0;i<10;i++){
        const randomNumber=Math.floor(Math.random()*10)
        if(randomNumber<=5){
          const newComment={person:props.friends[Math.floor(Math.random()*20)],comment:''}

          switch(type){
            case('photo'):
              newComment.comment=photoReactions[Math.floor(Math.random()*photoReactions.length)]
              break;              
            case('joke'):
              newComment.comment=jokeReactions[Math.floor(Math.random()*jokeReactions.length)]
              break;
            case('football'):
              newComment.comment=footballReactions[Math.floor(Math.random()*footballReactions.length)]
              break;
            case('trade'):
              newComment.comment=tradeReactions[Math.floor(Math.random()*jokeReactions.length)]
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
            matchviewUrl: props.footballHighlights.matchviewUrl,
            text:`Have you seen this ${props.footballHighlights.title} from  ${props.footballHighlights.competition}?\
            You can watch highlights here:`,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            showComments: false
            }
            dispatch(ADD_GROUP_POST(newPost,2))
          break;
        case('trade'):
        const tradeItem=props.shop[Math.floor(Math.random()*5)]
          newPost={user:props.friends[Math.floor(Math.random()*20)],
            photo:tradeItem.image,
            comments:comments,
            text:`[${tradeItem.category}] #WTT #WTS Any offers for this ${tradeItem.title}? Can sell it for $${tradeItem.price}`,
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
  const contentPickerInterval = setInterval(() => {contentPicker()
  }, 5000);
  return () => {
    clearTimeout(contentPickerInterval);
  };
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
console.log(props.shop[0], shopItem)

  if(props.shop.length>0&&props.friends[0]){
  generateContent('trade')
console.log( shopItem)
  }
},[props.friends,props.shop])

useEffect(()=>{
  console.log(props.footballHighlights)
  if(props.footballHighlights&&props.friends[0]){
  generateContent('football')
console.log(props.footballHighlights)
  }
},[props.footballHighlights?.title,props.friends])



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
      shop: state.groupsReducer.shopItems,
      footballHighlights: state.groupsReducer.footballHighlights,
  };
}


export default connect(mapStateToProps)(App);
