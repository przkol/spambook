# SpamBook
(LIVE  https://przkol.github.io/spambook/)

## Overview
SpamBook is my attempt at creating a front-end similar to that of Facebook and adding social media-like content generation (such as friends list, posts and others) based on free web APIs and Redux for state management.

## Resources:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

[React-redux](https://react-redux.js.org/)

[React Router](https://reactrouter.com)

[Styled Components](https://www.styled-components.com/)

[Random User Generator API](https://randomuser.me/)

[Fake Store API](https://fakestoreapi.com/)

[ScoreBat Api](https://www.scorebat.com/video-api/v3/')

[Joke API](https://v2.jokeapi.dev/)

[Cat as a Service API](https://cataas.com/)

[Font Awesome Icons](https://fontawesome.com/)

[StackOverflow](https://stackoverflow.com/)


## App and it's main components

### App
   App is built from  3 main sections: Header, SideNav, SideChat; <main> which changes it's content based on the location(can be either a general post feed, group feed, user info panel or chat app). All of the above are described in more details below.

   There are two view modes: desktop or mobile. In desktop mode, the 3 main sections are constantly visible and only the <main> contents change. In mobile mode only 1 section is visible at a time due to limited viewport dimensions.
**App is checking for viewport width changes and decides which mode should be displayed.**

### Header
   Header contains: 
   - page logo (redirects to main feed onClick)
   - main user section with user's name and photo (redirects to user info panel onClick)
   - only in mobile view: mobileNav which is used to switch between viewing: main navigation, chat app and contact list

### SideNav
   SideNav contains:
   -links to general feed page, user info panel, chat app, Groups sections and individual group feed pages (React Router NavLinks)
   - Day/night mode switch - uses createContext/useContext to switch between colors set in GlobalTheme created in StyledComponents

### SideChat
   SideChat is a list of user's contacts (or friends) provided by friendsReducer and a input enabling the user to filter the list. Clicking a friend will open a chat window

### <main>
    <main> is the outlet for all of the content-components rendered by React Router for matching routes.

1. Feed / GroupFeed
    This is the component displaying posts created by your friends. 
    General feed posts can either be random jokes or photos of random cats. Group feed posts contain either product offers or football matches previews (depending on group) Each post has it's likes and comments set at time of creation. Posts can also be liked and commented by user. Clicking on the person's name in post header redirects user to UserInfo section, containing target's personal information.

2. PostInput
    Post input enables user to add his own posts either to the 'general' feed or certain groups.
    General posts are stored in postReducer state, group posts are stored in groupsReducer state.

3. UserInfo
    This panel displays user's information. If the target is the main user, the data can be edited. Data is verified before each 'save', if the verification process goes well - the data is dispatched to mainUser state

4. Chats / Chatter
    This component contains a list of all previously created chats with user's friends and a window which can display the contents of each individual chat on it's selection. List of chats is read from chatReducer state.    

5. Groups section
    This section displays panels for every group from groupsReducer state. Panels include groups' background photo, name nad number of posts. There is also a  'Add a new group' panel which redirects user to the group creation form.

6. Create a new group
    In this section, user can create a new group. Each group requires a new unique name and a background photo(upload required). To succesfully create a new group user is required to enter his e-mail address and check the "terms of service" checkbox. The email address is validated by checking if it matches it's counterpart in mainUserReducer state.

