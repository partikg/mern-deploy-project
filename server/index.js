var express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(function () {
        console.log('Connected to MongoDB')
    })
    .catch(function (err) {
        console.error('Error connecting to MongoDB:', err.message);
    })

app.get('/api/health', function (req, res) {
    return res.status(200).json({ status: 'OK' });
})

var server = app.listen(process.env.PORT || 5000, function () {
    console.log(`Express App running at http://127.0.0.1:${process.env.PORT || 5000}/`);
})