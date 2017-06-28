
var axios = require('axios');


var API = "AIzaSyC585Jhr1eNvtH19TWMycNAZgthBaciGvA";



// Helper Functions
var helpers = {

	query: function(location){
var location = "Evanston, Illinois, USA"
		//Figure out the geolocation
		var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+" + location + "&key=" + API;

		return axios.get(queryURL)
			.then(function(response){
				var apiRestaurants =[];
				var results = (response.data.results)

				apiRestaurants.push(results); 

				console.log(apiRestaurants);
				return apiRestaurants; 
			// for (var i=0; i<response.data.results.length; i++) {
			// 	console.log(response[i]);
			// }
		})

	}

}




// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
