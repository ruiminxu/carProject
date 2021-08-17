const express = require('express');
const router = express.Router();
const database = require('../Database');

router.get('/', (err, res) => {
    let sql = 'SELECT * FROM PERSON';

    database.query(sql, (error, result) => {
        if(error) throw error;
        res.send(`Welcome ${result[0].FIRSTNAME}`);
    });
});

module.exports = router;