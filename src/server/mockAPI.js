/*let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json
*/

var aylien = require('aylien_textapi');
var textApi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

var apiData = {};

textApi.sentiment({
    'text': 'John is a very good football player!'
}, function(error, response) {
    if (error === null) {                
        var apiData = response
        console.log(apiData)
        
    } 
}); 
console.log(apiData)

module.exports = apiData;
