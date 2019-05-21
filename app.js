var express = require('express'); //1
var app = express(); //2

var yelp = require('./controllers/yelpcontroller');

app.use(require('./middleware/headers'));

//var bodyParser = require('body-parser');

//app.use(bodyParser.json());

app.use('/yelp',yelp)

//3         //4
app.listen(3000, function(){
    console.log('App is listening on 3000.') //5
});