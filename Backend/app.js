const express = require('express');
const app = express();

const PORT = process.env.port || 5000;

//Import database
const database = require('./Database');

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM PERSON';
    let firstName = '';
    let lastName = '';
    
    database.query(sql, (error, result) => {
        if(error) throw error;
        firstName = result[0].FIRSTNAME;
        lastName = result[0].LASTNAME;
        res.send(`Welcome ${firstName}`);
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})