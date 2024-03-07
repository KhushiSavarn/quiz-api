//import packages
const express = require('express'); 
const mysql = require('mysql2/promise');
const { Pool } = require('mysql2/typings/mysql/lib/Pool');

//instantiating the packages
const app = express();

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'quiz',
});

//APi endpint to get questions

app.get('/questions', async(req,res) =>{

    const connection = await pool.getConnection();  
    //query to fetch data
    const [results] = await connection.query(
        "SELECT * FROM quiz_questions where id=5"
    );
    console.log(results[0]);
    res.json(results[0]);

} );