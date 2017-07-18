var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport'); 
var session = require('express-session'); 
var exphbs = require("express-handlebars");
var users = require("./models/users.js")
var app = express();
var PORT = process.env.PORT || 8080;
var db = mongoose.connection;

var restaurant = require('./models/restaurant.js');
var users = require('./models/users.js');

var hbs = exphbs.create({
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use(cors());
app.options('*', cors());

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./config/passport/passport.js')(passport, users);

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/restaurants');

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/reactIndex.html");
})

// app.post('/submit', function(req, res){
//   var content = test(req.body); 
//     content.save(function(error, doc) {
//     // Send any errors to the browser
//     if (error) {
//       res.send(error);
//     }
//     // Otherwise, send the new doc to the browser
//     else {
//       res.send(doc);
//     }
//   });
// });


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

app.get('/api/users', function(req, res){
  var newUser = new user (req.body); 

  newUser.save(function (err, doc){
    if (err) {
      console.log (err)
    }
    else {
      res.send(doc)
    }
  })
})


app.get('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    console.log("hey it's hitting")
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});



// app.post('/signin', function(req, res) {
//   users.findOne({
//     username: req.body.username
//   }, function(err, user) {
//     if (err) throw err;

//     if (!user) {
//       res.send({success: false, msg: 'Authentication failed. User not found.'});
//     } else {
//       // check if password matches
//       users.comparePassword(req.body.password, function (err, isMatch) {
//         if (isMatch && !err) {
//           // if user is found and password is right create a token
//           var token = jwt.sign(user, config.secret);
//           // return the information including token as JSON
//           res.json({success: true, token: 'JWT ' + token});
//         } else {
//           res.send({success: false, msg: 'Authentication failed. Wrong password.'});
//         }
//       });
//     }
//   });
// });



app.listen(PORT, function() {
  console.log("App listening on PORT 👉 " + PORT);
});