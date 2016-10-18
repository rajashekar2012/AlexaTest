var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/alexaService', function (req, res) {
   console.log("Got a POST request alexa");
   //res.send('Hello POST');
 var response={
  "version": "1.0",
  "sessionAttributes": {
    "supportedHoriscopePeriods": {
      "daily": true,
      "weekly": false,
      "monthly": false
    }
  },
  "response": {
    "outputSpeech": {
      "type": "PlainText",
      "text": "Today will provide you a new learning opportunity.  Stick with it and the possibilities will be endless. Can I help you with anything else?"
    },
    "card": {
      "type": "Simple",
      "title": "Horoscope",
      "content": "Today will provide you a new learning opportunity.  Stick with it and the possibilities will be endless."
    },
    "reprompt": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "Can I help you with anything else?"
      }
    },
    "shouldEndSession": false
  }
}

res.send(response);
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	
  console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})
var port_ = process.env.PORT || 4545;
var server = app.listen(port_, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})