const express = require('express');
const app = express();
const Recipe = require('./models/Recipe');

app.use(express.json());



module.exports = app;
