var axios = require('axios');
var React = require('react');

var Form = require('./panels/form');
var Results = require('./panels/results');
var saved = require('./panels/saved');

var Link = require("react-router").Link;

var helpers = require('./data.js');

// This is the main component.
var Main = React.createClass({

	getInitialState: function(){
		return {
			
			results: []
			
		}
	},

	onResultChange: function(randomizeRestaurants) {
		this.setState({results: randomizeRestaurants});
	},



	// Here we render the function
	render: function() {
		return(
<div className ="container">
	

<div className="allItems col-12">

<h3 className="title panel-title text-center">Restaurant Roulette</h3>
	      
			<Form onResultChange={this.onResultChange} />
			<Results results={this.state.results} />

			 <div>
			<saved saved={this.state.saved}/>
			// saved to render here!!!!!
		</div>
			 

   
</div>
			 
  </div>

		);
	}
});



module.exports = Main;
