const express = require("express");
const cors = require("cors");
const {Pool} = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user : 'e',
    host : 'localhost',
    database : 'studentlogin',
    password : '630487', 
    port : 5432,
});
    
pool
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});


// Query to retrieve all rows from data
// JUST FOR TESTING, UNCOMMENTING WILL FLOOD TERMINAL.
// pool.query('SELECT * FROM studentaccounts', (err, result) => {
//     if (err) {
//         console.error('Error executing query', err);
//     } else {
//         console.log('Query result:', result.rows);
//     }
// });    

// Route for adding users to the table for signUp.
app.post("/addUser", async(req, res) => {
    const data = req.body
    console.log("the body json ", req.body)
    const floatingBalance = parseFloat(data.balance);
    await pool.query("INSERT INTO studentaccounts (username, password, email, balance) VALUES ($1, $2, $3, $4)", [data.username, data.password, data.email, floatingBalance])
    res.status(200).send()
  });

// query database for login validation.
app.post("/usersLogin", async (req, res) => {
    const userData = req.body
    console.log("*** username of login user :" , userData)
    pool.query("SELECT * FROM studentaccounts WHERE username = $1", [userData.username], (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            console.log('Query result:', result.rows);
        }
    const retrievedUser = result.rows
    console.log(retrievedUser[0].password)
    // careful, something about adding the retrievedUser[0] caused this work, need to understand.
    if(retrievedUser[0].password == userData.password){
        console.log("LOGIN SUCCCESS")
        res.status(200).send()
    }
    else
        console.log("LOGIN FAILED")
    
    }); 
    // const { rows } = await pool.query("SELECT * FROM studentaccounts");
    // console.log("****user 1 is this data: ", rows[0].password)

    // // for of loop for iteration through each student record. 
    // for(r of rows){
    //     console.log(r.password)
    // }

    // const loginValidation = res.json(rows)
    res.status(200).send()
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/home', (req, res) => {    
    res.send('Hello home!');
});



app.listen(4000, () => console.log('Server is running on http://localhost:4000'))

