var axios = require('axios');
var React = require('react');
var routes = require ('react-router'); 
var Form = require('./panels/Form');
var Results = require('./panels/Results');
var Game = require('./Game')

var Link = require("react-router").Link;


var helpers = require('./data.js');

// This is the main component.
var Game = React.createClass({

  getInitialState: function(){
    return {
      results: []
   
    }
  },

  onResultChange: function(randomizeRestaurants) {
    this.setState({results: randomizeRestaurants});
  },

  
  render: function(){
    return(
      <div className= "container">

    <div className="panel-heading">
          <h3 className="title panel-title text-center">Restaurant Roulette</h3>
        </div>

        <div className=" playRouletteRow row">
          <Form onResultChange={this.onResultChange} />
        </div>

        <div className=" resultsRow row">
          <Results results={this.state.results}/>
        </div>
</div>
      
      )
  }
});

module.exports = Game;

