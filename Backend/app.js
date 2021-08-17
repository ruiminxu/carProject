const express = require('express');
const app = express();

const PORT = process.env.port || 5000;

app.use('/', require('./Routes'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})