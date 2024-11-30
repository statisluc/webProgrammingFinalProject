import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Goals from "./components/Goals";
import Myaccount from "./components/Myaccount";
import {Route,Routes} from "react-router-dom" ;
import {Link} from "react-router-dom";

function App() {
  return (  
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/goals" element={<Goals></Goals>}></Route>
          <Route exact path="/myaccount" element={<Myaccount></Myaccount>}></Route>
        </Routes>
  )
}

export default App;