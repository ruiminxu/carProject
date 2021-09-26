const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const db = require('./Database/index');

const PORT = process.env.port || 5000;

app.use(bodyParser.json());

app.use(session({
    secret: 'Cars',
    path: '/',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
    }
}))

app.use('/', require('./API/Routes'));

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`)
})