const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
/*var aylien = require("aylien_textapi");

// API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  */
const app = express();

//Configure Express to use bodyParser as middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))


console.log(JSON.stringify(mockAPIResponse));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
