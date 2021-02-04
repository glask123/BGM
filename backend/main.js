//API TOOLS
const express = require('express');
const app = express();
const Joi = require('joi');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

//MONGODB
const mongoose = require('mongoose');
require('dotenv/config');

//MODULES
const { totalVaccinesOrdered, modernaVaccinesOrdered, pfizerVaccinesOrdered } = require('./fetch');
const userRoute = require('./routes/users');


app.use(bodyParser.json());

app.use('/users', userRoute);

app.get('/', (req, res) => {
    
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB");
});

console.log(modernaVaccinesOrdered());

app.listen(5500);