var axios = require('axios');
var React = require('react');
var routes = require ('react-router'); 

var Form = require('./panels/Form');
var Results = require('./panels/Results');
var Saved = require('./panels/Saved');
var app = require('express');


var helpers = require('./data.js');

// This is the login component.
var Login = React.createClass({

getInitialState: function(){
    return {
      // location: "",
      results: []
      // topic: "",
      // startYear: "",
      // endYear: "",
      // results: [],
      // articles: []
    }

 onSubmit: function(e) {
    e.preventDefault()

    // check if form is valid
    var validation = this.refs.form.value().validation
    if (ReactForms.validation.isFailure(validation)) {
      console.log('invalid form')
      return
    }


render: function(){
// sign in
  return(

 <div className="loginform">

 <h3> Sign Up </h3>
    <form id="signup" name="signup" method="post" action="/signup">

      <label for="">Email</label>
      <input className="form-control userEmail" placeholder="Enter your email" type="text" name="email"/>
      <input className="form-control userPassword" placeholder="Create your password" type="text" name="password"/>

   <button type="submit" class="btn btn-default signupbutton" >Submit</button>
    </form>


    <h3> Sign In </h3>
    <form id="signin" name="signin" method="post" onSubmit={this.onSubmit}>
  
        <label for="email">Email Address</label>
        <input className="text" name="email" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input className="btn signinbutton" type="submit" value="Sign In" />
    </form>


    
</div>
    
	)
	}
});
module.exports = Login;
