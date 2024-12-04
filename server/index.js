const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/home', (req, res) => {
    res.send('Hello home!');
});


app.listen(4000, () => console.log('Server is running on http://localhost:4000'))

