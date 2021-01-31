const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send("posts");
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;