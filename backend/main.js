const express = require('express');
const app = express();
const Joi = require('joi');
require('dotenv/config');
const userRoute = require('./routes/users');

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send("Hello");
});

/*
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB");
});
*/

app.listen(3000);