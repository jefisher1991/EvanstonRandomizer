// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var API = "AIzaSyC585Jhr1eNvtH19TWMycNAZgthBaciGvA";


// Helper Functions
var helpers = {

	query: function(location){

		//Figure out the geolocation
		var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+" + location + "&key=" + API;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response.data.results);
				return response.data.results;
			// for (var i=0; i<response.data.results.length; i++) {
			// 	console.log(response[i]);
			// }
		})

	}

}




// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
