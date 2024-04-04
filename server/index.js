require('dotenv').config()
const express = require('express');
const getCard = require('../db/models')

const app = express();
const PORT = process.env.PORT;

const path = require('path');

app.get('/game', getCard);

app.use(express.static(path.join(__dirname, '../client/dist')));

// The spotfiy player from https://developer.spotify.com/documentation/web-playback-sdk/howtos/web-app-player
const request = require('request')

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET


app.get('/auth/login', (req, res) => {

  var scope = "streaming \
               user-read-email \
               user-read-private"

  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: "http://localhost:3000/auth/callback",
    state: state
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})


app.get('/auth/callback', (req, res) => {

  var code = req.query.code;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.redirect('/')
    }
  });
});

app.get('/auth/token', (req, res) => {
  console.log('hi!')
  res.json(
     {
        access_token: access_token
     })
})

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});