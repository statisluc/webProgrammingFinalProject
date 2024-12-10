const express = require("express");
const cors = require("cors");
const {Pool} = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user : 'e',
    host : 'localhost',
    database : 'todolist',
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

pool.query('SELECT * FROM todos', (err, result) => {
    if (err) {
        console.error('Error executing query', err);
    } else {
        console.log('Query result:', result.rows);
    }
});    

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/home', (req, res) => {    
    res.send('Hello home!');
});


app.listen(4000, () => console.log('Server is running on http://localhost:4000'))

