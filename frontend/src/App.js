import {useState} from "react";
import logo from './logo.svg';
import './App.css';
 
function App() {
  const [newGoal, setNewGoal] = useState("");
  console.log(newGoal)
  return (  
    <div className="App">
      <header className="App-header">
        <nav className="navigation"> 
          {/* <a className="main-heading"> CFT </a> */}
          <a className="main-heading"> account overview </a>
          <a className="main-heading"> financial goals </a> 
          <a className="main-heading"> my account</a>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="body-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        {/* <div className="body-container">
          <label>add your goal</label> <br></br>
          <input 
          value = {newGoal} 
          onChange = {e => setNewGoal(e.target.value)}
          type="text" 
          id="goal"/>
        </div> */}
      </header>
    </div>
  );
}
export default App;


function Addgoal(){
  return(
    <div>
      here is another task to add
    </div>
  );
}
