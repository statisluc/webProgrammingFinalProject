import {Link} from "react-router-dom";
import Navbar from "./Navbar";
function Home(){
    return(
        <div className="App">
        <header className="App-header">  
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="body-container">
          <Greeting></Greeting>
          <Link to="/goals">Go To Goals Page</Link>
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

function Greeting(){
  return(
    <div>
      hello user!
    </div>
  );
}
function Addgoal(){
  return(
    <div>
      here is another task to add
    </div>
  );
}

export default Home;

