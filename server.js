var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
// var methodoverride = require("method-override"); 


var restaurant = require('./models/restaurant.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/restaurants');

var test = require('./models/restaurant.js'); 

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});



app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.post('/submit', function(req, res){
  var content = test(req.body); 
    content.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});


app.get('/api/saved', function(req, res) {

  restaurant.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});





app.post('/api/saved', function(req, res) {
    var newRestaurant = new restaurant (req.body);

  
    newRestaurant.save(function(err, doc) {
      if (err) {

        console.log(err);
      }

      else {
        res.send(doc);
      }

    });

  });

app.delete('/api/saved', function(req,res){

  console.log("#################################")
console.log(res); 
  db.collection("restaurants").deleteOne({location: location}, function(err, res) {
    if (err) throw err;
    console.log("successfully removed!");
  })
})





app.listen(PORT, function() {
  console.log("App listening on PORT 👉 " + PORT);
});