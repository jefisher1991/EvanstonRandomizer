var axios = require('axios');
var React = require('react');

var Form = require('./panels/form');
var Results = require('./panels/results');
var Saved = require('./panels/saved');

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
 	<div className="savedText">
			 <h3 className="savedText text-center">Saved Restaurants</h3>
			 </div>
			<Saved saved={this.state.savedRestaurants}/>
			</div>
	</div>
</div>

		);
	}
});



module.exports = Main;
