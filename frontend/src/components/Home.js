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
            <div className="new-vault">
                <button id="vaultButton" type="button">Create New Vault</button>


                <script>
                          class Vault{
                    #amount;
                    #goal;
                    #title;
                
                    constructor(title, amount, goal){
                        this.#amount = amount;
                        this.#goal = goal;
                        this.#title = title;
                
                    }
                
                    display(){
                        console.log(this.#amount);
                        console.log(this.#goal);
                        console.log(this.#title);
                    }
                    addMoney(additional){
                        this.#amount += additional;
                        return this.#amount;
                    }
                
                
                }
                    const vault_button = document.getElementById("vaultButton");
                    const create_vault = document.getElementById("create_vault");


                    vault_button.addEventListener("click", function(e){ //makes it so that create vault page appears on the screen
                    if(create_vault.style.display === 'none'){
                        create_vault.style.display = 'block';
                        vault_button.textContent = 'Cancel'
                }else{
                        create_vault.style.display = 'none';
                        vault_button.textContent = 'Create New Vault';
                }
                });


                    const goalinput = document.getElementById("goal");
                    const amountinput = document.getElementById("amount");
                    const vaultinput = document.getElementById("vaultinput");
                    const submitbutton = document.getElementById("submit");

                    function createVault() {
                        const vault_title = vaultinput.value;
                        const initial_amount = parseFloat(amountinput.value) || 0;
                        const goal = parseFloat(goalinput.value) || 0;

                        const newVault = new Vault(vault_title, initial_amount, goal);

                        create_vault.style.display = "none";
                        vaultinput.value = "";
                        amountinput.value = "";
                        goalinput.value = "";
                        vault_button.textContent = "Create New Vault";
                    }

                    submitbutton.addEventListener("click", createVault);

                </script>
            <div id="create_vault" style="display: none;">
                    <label for="reason_goal" id="askvaultinput">What is this money for? </label>
                        <input type ="text" id="vaultinput" aria-placeholder="New house, new car..."/>
                    <label for="amount" id="askamount">How much would you like to deposit upfront?</label>
                        <input type="text" id="amount" aria-placeholder="$500"></input>
                    <label for="goal" id="goal">How much are you looking to save?</label>
                        <input type="text" id="goal" aria-placeholder="$30,000"></input>
                    <button id="submit" type="button">Submit</button>

            </div>
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

