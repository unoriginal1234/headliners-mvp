require('dotenv').config()
const express = require('express');
const getCard = require('../db/models').getCard
const getArtists = require('../db/models').getArtists
// const myLogger = require('./middleware/visitCounter')

const app = express();
const PORT = process.env.PORT;

const path = require('path');

// app.use(myLogger)

app.get('/game', getCard);
app.get('/artists', getArtists);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.static(path.join(__dirname, '../public')));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});