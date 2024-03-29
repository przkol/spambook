import GlobalStyles from './sections/styled/Global';
import './App.css';
import Header from './sections/Header'
import SideChat from './sections/SideChat';
import Feed from './sections/Feed';
import SideNav from './sections/SideNav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserInfo from './sections/UserInfo';
import { fetchPhoto } from "./reducers/actions/photoActions"
import { useDispatch } from "react-redux"
import { fetchJoke } from "./reducers/actions/jokeActions"
import { fetchFriendsList } from './reducers/actions/friendsActions';
import { ADD_POST } from './reducers/actions/postActions';
import { PostInput } from './components/PostInput';
import { useEffect, useState, createContext } from 'react';
import { connect } from 'react-redux';
import Groups from './sections/Groups';
import GroupFeed from './sections/GroupFeed';
import { Outlet, useLocation } from "react-router";
import { fetchFootballHighlight, fetchProducts, ADD_GROUP_POST } from './reducers/actions/groupsActions';
import { ADD_MESSAGE_TO_CHAT, CREATE_NEW_CHAT, } from "./reducers/actions/chatActions"
import { ChatWindowsContainer } from './sections/ChatWindowsContainer';
import { useCallback } from 'react';
import { FullImageContainer } from './components/FullImageContainer';
import { globalLightTheme, globalDarkTheme } from './sections/styled/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import { photoReactions, jokeReactions, tradeReactions, footballReactions, friendMessages, friendsResponses } from './resources/textContentArrays';
import { Chatter } from './sections/Chatter';
import { AddGroupForm } from './components/AddGroupForm';

export const imgHandler = createContext()
export const themeToggler = createContext()
export const viewMobileMode = createContext()
export const openChatFunction = createContext()

function App(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [openChats, setOpenChats] = useState([])
  const [imgToShow, setImgToShow] = useState(false)
  const [prevTradePost, setPrevTradePost] = useState({ title: `` })
  const [prevFootballPost, setPrevFootballPost] = useState({ title: `` })
  const [prevJokePost, setPrevJokePost] = useState(0)
  const [prevCatPost, setPrevCatPost] = useState('')
  const [displayDarkTheme, setDisplayDarkTheme] = useState(false)
  const [viewMobileModeValue, setViewMobileModeValue] = useState(false)

  // TOGGLES MOBILE MODE FLAG BASED ON WINDOW.INNERWIDTH AND NAVIGATES TO /M/PATH
  const checkDisplayWidth = useCallback(() => {
    let currentPathPrefix = location.pathname.substring(0, 3);
    let currentPath = location.pathname;
    const mobilePathPrefix = '/m/';
    const widthLimit = 769;
    if (window.innerWidth < widthLimit) {
      setViewMobileModeValue(true)
      if (!(currentPathPrefix === mobilePathPrefix)) {
        navigate(`/m` + currentPath)
      }
    } else {
      if (window.innerWidth >= widthLimit && currentPathPrefix === mobilePathPrefix) {
        setViewMobileModeValue(false)
        navigate('/')
      }
    }
  }, [location.pathname, navigate])


  // ADD/REMOVE LISTENER FOR WINDOW RESIZE TO CHECK IF MOBILE MODE SHOULD BE DISPLAYED
  useEffect(() => {
    checkDisplayWidth()
    window.addEventListener('resize', checkDisplayWidth)
    return () => {
      window.removeEventListener('resize', checkDisplayWidth)
    }
  }, [checkDisplayWidth])

  // SET DARK/LIGHT THEME CONTEXT FOR THE WHOLE APP
  const toggleDarkTheme = () => {
    setDisplayDarkTheme(prevState => !prevState)
  }


  // SET IMAGE SOURCE TO BE DISPLAYED ON FULLSCREEN
  const handleImgPopup = (imgSrc) => {
    setImgToShow(imgSrc)
    const body = document.querySelector('body')
    if (imgSrc) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }

  }

  // CREATE NEW POST, SET IT'S CONTENT, SET LIKES AND COMMENTS, DISPATCH ADD POST TO STORE
  const generateContent = useCallback((type) => {
    const slashIndex = location.pathname.lastIndexOf('/') + 1
    const groupIdFromLocation = location.pathname.substring(slashIndex)
    const comments = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 10)
      if (randomNumber <= 5) {
        const newComment = { person: props.friends.usersList[Math.floor(Math.random() * 20)], comment: '' }

        switch (type) {
          case ('photo'):
            newComment.comment = photoReactions[Math.floor(Math.random() * photoReactions.length)]
            break;
          case ('joke'):
            newComment.comment = jokeReactions[Math.floor(Math.random() * jokeReactions.length)]
            break;
          case ('football'):
            newComment.comment = footballReactions[Math.floor(Math.random() * footballReactions.length)]
            break;
          case ('trade'):
            newComment.comment = tradeReactions[Math.floor(Math.random() * tradeReactions.length)]
            break;

          default: return
        }
        comments.push(newComment)
      }
    }


    let newPost = {
      userId: Math.floor(Math.random() * props.friends.usersList.length),
      likes: (Math.floor(Math.random() * 25) + 3),
      liked: false,
      comments: comments,
    }
    switch (type) {
      case ('photo'):
        newPost = {
          ...newPost,
          photo: props.photos,
          text: 'OMG, check this cat out!',
          seenByUser: false
        }
        dispatch(ADD_POST(newPost))

        break;
      case ('joke'):
        newPost = {
          ...newPost,
          photo: null,
          text: props.jokes,
          seenByUser: false
        }
        dispatch(ADD_POST(newPost))
        break;
      case ('football'):
        const footballGroupId = props.groupsState.groups[1].groupId
        newPost = {
          ...newPost,
          photo: props.footballHighlights.thumbnail,
          matchviewUrl: props.footballHighlights.matchviewUrl,
          text: `Have you seen this ${props.footballHighlights.title} from  ${props.footballHighlights.competition}?\
            You can watch highlights here:`,
          seenByUser: groupIdFromLocation === footballGroupId
        }
        dispatch(ADD_GROUP_POST(newPost, footballGroupId))
        break;
      case ('trade'):
        const tradeGroupId = props.groupsState.groups[0].groupId
        newPost = {
          ...newPost,
          photo: props.shop.image,
          text: `[${props.shop.category}] #WTT #WTS Any offers for this ${props.shop.title}? Can sell it for $${props.shop.price}`,
          seenByUser: groupIdFromLocation === tradeGroupId
        }

        dispatch(ADD_GROUP_POST(newPost, tradeGroupId))
        break;

      default: return
    }
  }, [dispatch, location.pathname, props.footballHighlights.competition, props.footballHighlights.matchviewUrl, props.footballHighlights.thumbnail, props.footballHighlights.title, props.friends.usersList, props.groupsState.groups, props.jokes, props.photos, props.shop.category, props.shop.image, props.shop.price, props.shop.title])

  // CHECKS IF CHAT FOR PROVIDED USER ID WAS ALREADY CREATED IN STORE & IS CURRENTLY OPEN IN APP
  const checkChatStatus = useCallback((id) => {
    const chatAlreadyOpen = openChats.includes(id)
    const chatAlreadyInState = props.chats.some(chat => chat.id === id)
    return ({ chatAlreadyOpen, chatAlreadyInState })
  }, [openChats, props.chats])



  // OPENS AN EXISTING CHAT OR CREATES A NEW ONE IF NEEDED
  const openChatWindow = useCallback(function (id) {
    let currentChats = openChats
    const check = checkChatStatus(id)
    if (!check.chatAlreadyOpen) {
      if (!check.chatAlreadyInState) {
        dispatch(CREATE_NEW_CHAT(id))
      }
      if (currentChats.length >= 3) {
        currentChats.splice(0, 1)
      }
      currentChats.push(id)
    }
    setOpenChats([...currentChats])
    return (check)
  }, [checkChatStatus, dispatch, openChats])
  //RANDOMLY GENERATES A NEW MESSAGE OR RESPONSE FROM FRIEND

  const generateRandomChatAction = useCallback(() => {
    const randomizer = Math.floor(Math.random() * 20)
    if (randomizer < 10) {
      const friendId = Math.floor(Math.random() * props.friends.usersList.length)
      const chatStatus = openChatWindow(friendId)
      const targetChat = props.chats.find(chat => chat.id === friendId)


      if (chatStatus.chatAlreadyInState && targetChat.lastMsgFlag !== 'noMsg') {
        if (targetChat.lastMsgFlag === 'user') {
          const randomMessage = friendsResponses[Math.floor(Math.random() * (friendsResponses.length - 1))]
          dispatch(ADD_MESSAGE_TO_CHAT(friendId, 'friend', randomMessage))
        } else if (targetChat.lastMsgFlag === 'friend') {
          dispatch(ADD_MESSAGE_TO_CHAT(friendId, 'annoyedFriend', 'Heeey, are you there?'))
        } else if (targetChat.lastMsgFlag === 'annoyedFriend') {
          dispatch(ADD_MESSAGE_TO_CHAT(friendId, 'shutdownFriend', 'Fine, whatever.. :('))
        }
      } else if (!chatStatus.chatAlreadyInState || (chatStatus.chatAlreadyInState && targetChat.lastMsgFlag === 'noMsg')) {
        const randomMessage = friendMessages[Math.floor(Math.random() * (friendMessages.length - 1))]
        dispatch(ADD_MESSAGE_TO_CHAT(friendId, 'friend', randomMessage))
      }
    }
  }, [dispatch, openChatWindow, props.chats, props.friends.usersList.length])


  // CLOSES AN EXISTING,CURRENTLY OPEN CHAT
  const closeChatWindow = (friendsName) => {
    setOpenChats(previousOpenChats => { return previousOpenChats.filter(chat => chat !== friendsName) })
  }
  //DISPATCHES FRIENDSLIST FETCH ACTION ON APP LOAD
  useEffect(() => {
    dispatch(fetchFriendsList)

  }, [dispatch])

  //CHOOSES RANDOM TYPE OF MAIN FEED POST & DISPATCHES FITTING ACTION (AND SETS INTERVAL FOR CONTENT GENERATION)
  useEffect(() => {
    const contentPicker = () => {
      const randomizer = Math.floor(Math.random() * 20)
      const randomizer2 = Math.floor(Math.random() * 20)
      if (randomizer < 10) {
        dispatch(fetchJoke)
      }
      else if (randomizer >= 10) {
        dispatch(fetchPhoto)
      }
      if (randomizer2 < 10) {
        dispatch(fetchProducts)
      }
      else if (randomizer2 >= 10) {
        dispatch(fetchFootballHighlight)
      }
    }
    contentPicker()
    const contentPickerInterval = setInterval(() => {
      contentPicker()
    }, 7500);
    return () => {
      clearTimeout(contentPickerInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // SETS INTERVAL FOR GENERATING CHAT MESSAGES
  useEffect(() => {
    const randomChatActionInterval = setInterval(() => { generateRandomChatAction() }, 6000);
    return () => {
      clearTimeout(randomChatActionInterval);
    }
  }, [generateRandomChatAction])

  //FIRES CONTENT GENERATION ON PHOTO CHANGE IN REDUCER
  useEffect(() => {
    if (props.photos && props.photos !== prevCatPost && props.friends.usersListLoadedFlag) {
      setPrevCatPost(props.photos)
      generateContent('photo')
    }
  }, [props.photos, props.friends, generateContent, prevCatPost])

  //FIRES CONTENT GENERATION ON JOKE CHANGE IN REDUCER

  useEffect(() => {

    if (props.jokes.id && props.jokes?.id !== prevJokePost && props.friends.usersListLoadedFlag) {
      setPrevJokePost(props.jokes?.id)
      generateContent('joke')
    }
  }, [props.jokes, props.friends, generateContent, prevJokePost])

  //FIRES CONTENT GENERATION ON ITEMSHOP CHANGE IN REDUCER
  useEffect(() => {
    if (props.friends.usersListLoadedFlag && props.shop?.title && prevTradePost?.title !== props.shop?.title) {
      setPrevTradePost({ title: props.shop.title })
      generateContent('trade')
    }
  }, [props.shop.title, props.friends, generateContent, prevTradePost?.title])

  //FIRES CONTENT GENERATION ON FOOTBALL CONTENT CHANGE IN REDUCER
  useEffect(() => {
    if (props.friends.usersListLoadedFlag && props.footballHighlights?.title && prevFootballPost?.title !== props.footballHighlights?.title) {
      setPrevFootballPost({ title: props.footballHighlights.title })
      generateContent('football')
    }
  }, [props.friends, props.footballHighlights.title, prevFootballPost?.title, generateContent])


  return (
    <>
      <imgHandler.Provider value={handleImgPopup}>
        <openChatFunction.Provider value={openChatWindow}>
          <viewMobileMode.Provider value={viewMobileModeValue}>
            <themeToggler.Provider value={{ toggleFunction: toggleDarkTheme, themeFlag: displayDarkTheme }}>
              <ThemeProvider theme={displayDarkTheme ? globalDarkTheme : globalLightTheme}>
                <GlobalStyles />
                <Header />
                <Routes>
                  <Route path=''
                    element={<>
                      <SideNav />
                      <SideChat />
                      <ChatWindowsContainer openChats={openChats} closeChatWindow={closeChatWindow} />
                      <main>
                        <Outlet />
                      </main>
                    </>}>
                    <Route path='/' element={<Feed />} />
                    <Route path='/user/:userid' element={<UserInfo />} />
                    <Route path='/user' element={<UserInfo />} />
                    <Route path='groups' element={<Groups />} />
                    <Route path="chatter/:id" element={<Chatter />} />
                    <Route path="chatter" element={<Chatter />} />
                    <Route path='groups/newgroup' element={<AddGroupForm />} />
                    <Route path='groups/:groupId' element={<GroupFeed />} />
                  </Route>
                  <Route path='m' element={<main ><Outlet /></main>}>
                    <Route exact path='/m' element={<><PostInput target='mainFeed' /> <Feed /></>} />
                    <Route exact path='/m/navigation' element={<SideNav />} />
                    <Route path='/m/user/:userid' element={<UserInfo />} />
                    <Route path='/m/user' element={<UserInfo />} />
                    <Route path='/m/contactlist' element={<SideChat openChatWindow={openChatWindow} />} />
                    <Route path='/m/groups' element={<Groups />} />
                    <Route path="/m/chatter/:id" element={<Chatter />} />
                    <Route path="/m/chatter" element={<Chatter />} />
                    <Route path='/m/groups/newgroup' element={<AddGroupForm />} />
                    <Route path='/m/groups/:groupId' element={<GroupFeed />} />
                  </Route>
                </Routes>
                {imgToShow ? <FullImageContainer src={imgToShow} /> : null}
              </ThemeProvider>
            </themeToggler.Provider>
          </viewMobileMode.Provider>
        </openChatFunction.Provider>
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
    groupsState: state.groupsReducer,
    chats: state.chatReducer
  };
}

export default connect(mapStateToProps)(App);
