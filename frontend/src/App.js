import React from 'react';
import {motion} from "framer-motion";
import { IoMdPerson } from "react-icons/io";import {useState} from "react";
import { IoIosKey } from "react-icons/io";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Goals from "./components/Goals";
import Myaccount from "./components/Myaccount";
import {Route,Routes} from "react-router-dom" ;
import {Link} from "react-router-dom";
import { ConeGeometry } from "three";

// really cool animated emojis on this website
// https://animated-fluent-emoji.vercel.app/

const TextAnimation = () => {
  return <motion.h2
  initial ={{y : 25 , opacity :0}}
  animate ={{y : 0 , opacity :1}}
  transition={{duration : 1, ease : "easeInOut"}}  
  > CollegeTracker <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Eight-Thirty.png" alt="Eight-Thirty" width="60" height="60" /></motion.h2>
}

function App() {
  return (  
        <Login></Login>
      
  )
}

function Success(){
  return(
    <h1>welcome user</h1>
  )
}

function LoginInSignUp(){
  return(
    <div className='login-sign-up'>
    <button className='login-button'>login</button> <button className='login-button'>sign up</button>
    </div>
  )
}

function SignUp(){
  // TODO : component to display when user is signing up for the first time
  return(
    null
  )
}

function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginState, setLoginState] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);


  const validateLogin = (username) => {
    if(username == 'john'){
      setLoginState(true);
    }
    if(username != 'john'){
      setIncorrectLogin(true)
    }
  }

  if (loginState)
    return <Success></Success>
  return(
    <div className="outer-login-div">
      <img className = "background-image" 
      src='https://wagner.edu/communications/files/2020/03/MainHall4-1920.jpg'>
      </img>
      <div className="inner-login-div">
        {/*     <LoginInSignUp></LoginInSignUp> */}
        <h1 className="login-heading"> <TextAnimation></TextAnimation> </h1>
        <h2 className='username-password'>Username <IoMdPerson /></h2>
          <input 
          className= 'logins'
          type = "text"
          value = {username}
          onChange={(event) => setUsername(event.target.value)}
          />
        <h2 className='username-password'> Password <IoIosKey/></h2>
        <input 
          className='logins'
          type = "text"
          value = {password}
          onChange={(event) => setPassword(event.target.value)}
          />
          {incorrectLogin ? <h3 className='logins'> incorrect login, please try again.</h3> : null}
        <button className='login-button' onClick={(event) => validateLogin(username)}> Sign In </button>
      </div>
      {/* <h1>dont have an account? sign up here</h1> */}
    </div>
  )
}

export default App;
//      depricated for now, goes in App()
        // <Routes>
          
        //   <Route exact path="/" element={<Home></Home>}></Route>
        //   <Route exact path="/goals" element={<Goals></Goals>}></Route>
        //   <Route exact path="/myaccount" element={<Myaccount></Myaccount>}></Route>
        // </Routes>