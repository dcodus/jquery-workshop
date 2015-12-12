var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
// app.use(bodyParser.json());
app.get('/', function(req, res){
   request('http://api.open-notify.org/iss-now.json', function (err, response, body) {
       res.jsonp(body);
       console.log(body)
   }) 
});

app.listen(process.env.PORT);