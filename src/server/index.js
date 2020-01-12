const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')

var aylien = require("aylien_textapi");
let projectData = {};
// API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  
const app = express();

//Configure Express to use bodyParser as middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Cors for cross origin allowance
app.use(cors());

app.use(express.static('./dist'))



app.get('/', function (req, res) {
    res.sendFile("dist/index.html")
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})




app.post("/all", (req, res) => {
  const { url } = req.body;

  textapi.sentiment({ url }, (err, data) => {
    if (err) {
      console.log("error", err);
      return;
    }
    res.json(data);
    console.log("data", data)
  });
});
