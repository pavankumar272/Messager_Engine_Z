import { ChatEngine} from 'react-chat-engine';
import React from 'react';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
function App() {
if(!localStorage.getItem('username'))return <LoginForm />
const userName =localStorage.getItem('username');
const password = localStorage.getItem('Password');
  return (
    <>
    <Header/>
   <ChatEngine
   
   height="100vh"
   projectID="892fd6a3-8613-474a-8d81-2fea2e901d1b"
   userName={userName}
   userSecret={password}
   renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
   
   />
   </>
  );
}

export default App;
