var axios = require('axios');
var React = require('react');
var routes = require ('react-router'); 
var Form = require('./panels/Form');
var Results = require('./panels/Results');
var Game = require('./Game')
var Link = require("react-router").Link;
var helpers = require('./data.js');

// This is the login component.
var Main = React.createClass({

getInitialState: function(){
    return {
      results: []
    }
    },

 onSubmit: function(e) {
    e.preventDefault()

    // check if form is valid
    var validation = this.refs.form.value().validation
    if (ReactForms.validation.isFailure(validation)) {
      console.log('invalid form')
      return
      }
    },


render: function(){
// sign in
  return(

 <div className="loginForm">

 <h3> Sign Up </h3>



    <form id="signup" name="signup" method="GET" action="/signup">
        <label for="email">Email Address</label>
        <input class="text" name="email" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input class="btn" type="submit" value="Sign Up" />
    </form>


    <h3> Sign In </h3>
    <form id="signin" name="signin" method="post" action="/signin">
  
        <label for="email">Email Address</label>
        <input className="text" name="email" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input className="btn" type="submit" value="Sign In" />
    </form>
    
</div>
    
  )
  }
});
module.exports = Main;
