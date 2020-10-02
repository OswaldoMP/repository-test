const express = require('express');


const app = express();


app.use('/api/v1/doctor', require('./doctor'));





module.exports = app;