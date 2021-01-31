const express = require('express');
const app = express();
const Joi = require('joi');
const mongoose = require('mongoose');
require('dotenv/config');
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.json());

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname })
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB");
});

/*
fetch("https://api.covidtracking.com/v1/states/ca/current.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
*/

fetch("https://data.cdc.gov/resource/b7pe-5nws.json?jurisdiction=California")
    .then((response) => response.json())
    .then((data) => console.log(data))

app.listen(5500);