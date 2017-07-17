
var React = require('react');
var routes = require ('react-router'); 
var helpers = require('../data.js')
var Form = React.createClass({

  getInitialState: function(){
    return {
      location: ""
    }
  },

  handleClick: function(e){
    e.preventDefault();
     helpers.query(this.state.location, function(response) {
      console.log(response);

       
      var randomizeRestaurants = [response[Math.floor( Math.floor(Math.random()*response.length))]];
      console.log(randomizeRestaurants)

      this.props.onResultChange(randomizeRestaurants);

     


    }.bind(this)) 
  },

  
  render: function(){

    return(

   
        <div className="panel-body text-center">
            <form >
              <button className="spinTheWheel btn btn-primary" onClick={this.handleClick}> Spin the Wheel </button>
            </form>
        </div>
     

    )
  } 
});

module.exports = Form;
