import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';
import { Route,Routes, useNavigate  } from 'react-router-dom';
import UserInfo from './sections/UserInfo';
import { fetchPhoto } from "./reducers/actions/photoActions"
import { useDispatch,useSelector } from "react-redux"
import { fetchJoke } from "./reducers/actions/jokeActions"
import { ADD_POST } from './reducers/actions/postActions';
import { PostInput } from './components/PostInput';
import { useEffect, useState,createContext } from 'react';
import { connect } from 'react-redux';
import Groups from './sections/Groups';
import GroupFeed from './sections/GroupFeed';
import { useLocation, } from "react-router";
import { fetchFootballHighlight, fetchProducts, ADD_GROUP_POST } from './reducers/actions/groupsActions';
import { ADD_MESSAGE_TO_CHAT, CREATE_NEW_CHAT, } from "./reducers/actions/chatActions"
import { GroupHeader } from './components/GroupHeader';
import { ChatWindowsContainer } from './sections/ChatWindowsContainer';
import { useCallback } from 'react';
import { FullImageContainer } from './components/FullImageContainer';
import { globalLightTheme,globalDarkTheme } from './sections/styled/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import { photoReactions,jokeReactions,tradeReactions, footballReactions,friendMessages,friendsResponses } from './resources/textContentArrays';

export const imgHandler=createContext()
export const themeToggler=createContext()
export const viewMode=createContext()

function App(props) {
  const dispatch=useDispatch()
  const mainUserState = useSelector(state =>state.mainUserReducer)
  const location=useLocation()
  const navigate=useNavigate()
  const [openChats,setOpenChats]=useState([])
  const [imgToShow,setImgToShow]=useState(false)
  const [prevTradePost,setPrevTradePost]=useState()
  const [prevFootballPost,setPrevFootballPost]=useState({title:``})
  const [displayDarkTheme,setDisplayDarkTheme]=useState(false)
  const [viewMode,setViewMode]=useState('desktop')
  let viewportWidth=window.innerWidth
 

  const toggleDarkTheme=()=>{
    setDisplayDarkTheme(prevState=>!prevState)
  }

  const handleImgPopup=(imgSrc)=>{
    setImgToShow(imgSrc)
    const body=document.querySelector('body')      
    if(imgSrc){
    body.classList.add('no-scroll')
    }else{
    body.classList.remove('no-scroll')
    }

  } 

  const generateContent=(type)=>{
    const comments=[]
    for(let i=0;i<10;i++){
        const randomNumber=Math.floor(Math.random()*10)
        if(randomNumber<=5){
          const newComment={person:props.friends.usersList[Math.floor(Math.random()*20)],comment:''}

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
              newComment.comment=tradeReactions[Math.floor(Math.random()*tradeReactions.length)]
              break;

            default: return
          }
          comments.push(newComment)
          }
      }
      
      
      let newPost={}
      switch(type){
        case('photo'):
          newPost={user:props.friends.usersList[Math.floor(Math.random()*20)],
            photo:props.photos,
            comments:comments,
            text:'OMG, check this cat out!',
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            seenByUser:false
            }
            dispatch(ADD_POST(newPost))

          break;              
        case('joke'):
          newPost={user:props.friends.usersList[Math.floor(Math.random()*20)],
            photo:null,
            comments:comments,
            text:props.jokes,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            seenByUser:false
            }
            dispatch(ADD_POST(newPost))
          break;
        case('football'):
          newPost={user:props.friends.usersList[Math.floor(Math.random()*20)],
            photo:props.footballHighlights.thumbnail,
            comments:comments,
            matchviewUrl: props.footballHighlights.matchviewUrl,
            text:`Have you seen this ${props.footballHighlights.title} from  ${props.footballHighlights.competition}?\
            You can watch highlights here:`,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            seenByUser:false
            }
            dispatch(ADD_GROUP_POST(newPost,'2'))
          break;
        case('trade'):
          newPost={user:props.friends.usersList[Math.floor(Math.random()*20)],
            photo:props.shop.image,
            comments:comments,
            text:`[${props.shop.category}] #WTT #WTS Any offers for this ${props.shop.title}? Can sell it for $${props.shop.price}`,
            likes: (Math.floor(Math.random()*25)+3),
            liked:false,
            seenByUser:false
            }
            dispatch(ADD_GROUP_POST(newPost,'1'))
          break;

        default: console.log(type)  
        }
  }

const checkChatStatus=useCallback((friendsName)=>{
  const chatAlreadyOpen=openChats.includes(friendsName)
  const chatAlreadyInState=props.chats.some(chat=>chat.friend===friendsName)
  return ({chatAlreadyOpen,chatAlreadyInState})
},[openChats, props.chats])

  const generateRandomChatAction=()=>{
    const randomizer=Math.floor(Math.random()*20)
      if(randomizer<10){ 
        const randomFriend=props.friends.usersList[Math.floor(Math.random()*(props.friends.usersList.length))]
        const randomFriendName=randomFriend?.name?.first+' '+randomFriend?.name?.last
        const chatStatus=openChatWindow(randomFriendName)
        if(chatStatus.chatAlreadyInState){
        const targetChat=props.chats.find(chat=>chat.friend===randomFriendName)
        if(targetChat.lastMsgFlag==='user'){
        const randomMessage= friendsResponses[Math.floor(Math.random()*(friendsResponses.length-1))]
          dispatch(ADD_MESSAGE_TO_CHAT(randomFriendName,'friend',randomMessage))
        }
          } else if(!chatStatus.chatAlreadyInState){   
        const randomMessage= friendMessages[Math.floor(Math.random()*(friendMessages.length-1))]
          dispatch(ADD_MESSAGE_TO_CHAT(randomFriendName,'friend',randomMessage ))
        }
        }
    }

  const openChatWindow= function (friendsName){
    let currentChats=openChats
    const check=checkChatStatus(friendsName)
    if(!check.chatAlreadyOpen){
        if(!check.chatAlreadyInState){
            dispatch(CREATE_NEW_CHAT(friendsName))
        } 
        if(currentChats.length>=3){
          currentChats.splice(0,1)}
          currentChats.push(friendsName)
    } 
    setOpenChats([...currentChats])
      return(check)
}
  const closeChatWindow=(friendsName)=>{
      setOpenChats(previousOpenChats=>{return previousOpenChats.filter(chat=>chat!==friendsName)})
  }
console.log(location)
useEffect(()=>{
  if(viewportWidth<=768){navigate('/m')}
console.log(viewportWidth)
console.log(location)
},[window.innerWidth])

useEffect(()=>{
  const contentPicker=()=>{
    const randomizer=Math.floor(Math.random()*20)
    const randomizer2=Math.floor(Math.random()*20)
    if(randomizer<10){ 
      dispatch(fetchJoke)}
    else if(randomizer>=10){ 
      dispatch(fetchPhoto)}
    if(randomizer2<10){
      dispatch(fetchProducts)}
    else if(randomizer2>=10){
      dispatch(fetchFootballHighlight)}
  }
  contentPicker()
  const contentPickerInterval = setInterval(() => {contentPicker()
  }, 10000);
  return () => {
    clearTimeout(contentPickerInterval);
  }
},[])

useEffect(()=>{  
  const randomChatActionInterval = setInterval(() => {generateRandomChatAction()}, 4000);
  return () => {
    clearTimeout(randomChatActionInterval);
  }
},[props])

useEffect(()=>{
  if(props.photos&&props.friends.usersListLoadedFlag){
  generateContent('photo')}
},[props.photos,props.friends])

useEffect(()=>{
  if(props.jokes&&props.friends.usersListLoadedFlag){
  generateContent('joke')
  }
},[props.jokes,props.friends])

useEffect(()=>{
  if(props.shop?.title&&props.friends.usersListLoadedFlag){
  generateContent('trade')
  }
},[props.shop?.title,props.friends])

useEffect(()=>{
  if(props.groups.footballHighlightsFlag&&props.friends.usersListLoadedFlag&&prevFootballPost?.title!==props.footballHighlights?.title){
    setPrevFootballPost({title:props.footballHighlights.title})
  generateContent('football')

  }
},[props.groups.footballHighlights,props.friends])



  return (
<>
<imgHandler.Provider value={handleImgPopup}>
<themeToggler.Provider value={{toggleFunction:toggleDarkTheme, themeFlag:displayDarkTheme}}>
  <ThemeProvider theme={displayDarkTheme? globalDarkTheme: globalLightTheme}>
    <GlobalStyles/>

    <Header/>


    <Routes>  
      <Route  path='/'element={<>
      <div className="asidesContainer">
        <SideNav />
        <SideChat openChatWindow={openChatWindow}/>
        </div><ChatWindowsContainer openChats={openChats} closeChatWindow={closeChatWindow}/> </>} />
       
      </Routes>
    
    <main>
      <Routes>  
        <Route exact path='/' 
          element={<>
          
          <PostInput mainUser={mainUserState.userInfo} target='mainFeed'/>
          <Feed /></>}/>

        <Route exact path='user' element={<UserInfo/>} />
        <Route exact path='groups' element={<Groups/>} />
        <Route exact path='groups/*' 
          element={<>
          <GroupHeader groupIdToShow={location.pathname[location.pathname.length-1]} 
            groupState={props.groups}/> 
          <PostInput mainUser={mainUserState.userInfo} 
            target='group'groupIdToShow={location.pathname[location.pathname.length-1]}/>
          <GroupFeed groupIdToShow={location.pathname[location.pathname.length-1]}/></>} />
         
            <Route  path='/m' element={<><Feed /></>} />
            <Route  exact path='/m/navigation' element={<SideNav/>} />
            <Route  exact path='/m/contactlist' element={<SideChat openChatWindow={openChatWindow}/>} />
          </Routes>

          </main>

    
    {imgToShow?<FullImageContainer src={imgToShow}/>:null}
  </ThemeProvider>
  </themeToggler.Provider>
</imgHandler.Provider> 
</>
  );
}

const mapStateToProps = (state) => {
  return {
      photos: state.photoReducer.photoToAdd,
      jokes: state.jokeReducer,
      friends: state.friendsReducer,
      shop: state.groupsReducer.shopItems,
      footballHighlights: state.groupsReducer.footballHighlights,
      groups:state.groupsReducer,
      chats:state.chatReducer
  };
}

export default connect(mapStateToProps)(App);
