var axios = require('axios');
var React = require('react');

var Form = require('./panels/Form');
var Results = require('./panels/Results');
var Saved = require('./panels/Saved');


var helpers = require('./data.js');

// This is the main component.
var Main = React.createClass({

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
	},

	onResultChange: function(results) {
		this.setState({results: results});
	},

	// saveArticle: function(title, date, url){
	// 	axios.post('/api/saved', {title: title, date: date, url: url})
	// 	.then(function(response){
	// 		console.log("SAVED IN MONGO.");
	// 		return(response);
	// 	})
	// 	this.getArticle();
	// },

	// deleteArticle: function(article){
	// 	axios.delete('/api/saved/' + article._id)
	// 		.then(function(response){
	// 			this.setState({
	// 				articles: response.data
	// 			});
	// 			return response;
	// 		}.bind(this));
	// 	this.getArticle();
	// },

	// getArticle: function(){
	// 	axios.get('/api/saved')
	// 		.then(function(response){
	// 			this.setState({
	// 				articles: response.data
	// 			});
	// 		}.bind(this));
	// },

	// componentDidMount: function(){
	// 	axios.get('/api/saved')
	// 		.then(function(response){
	// 			this.setState({
	// 				articles: response.data
	// 			});
	// 		}.bind(this));
	// },

	// Here we render the function
	render: function(){
		return(

			<div className="container">

					<h1 className="text-center"> Restaurant Randomizer</h1>
				<div className="row">
					<Form onResultChange={this.onResultChange} />
				</div>

				<div className="row">
					<Results results={this.state.results}/>
				</div>

			</div> 
			)
	}
});

module.exports = Main;
