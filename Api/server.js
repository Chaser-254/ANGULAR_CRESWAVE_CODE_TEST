const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/mongoose');

const api = require('./routes/api');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

module.exports = app;
