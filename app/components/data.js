// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var API = "dd01643961c2c43b29684c8f792a5af7";

// Helper Functions
var helpers = {

	query: function(location, foodtype){

		//Figure out the geolocation
		var URL = "https://developers.zomato.com/" + API;

		return axios.get(URL)
			.then(function(response){

				var restaurants = [];
				var results = response.data.response.docs;
				var num = 0;

				//Gets first 5 articles that have all 3 components
				for(var i = 0; i < results.length; i++){

					if(num > 0) {
						return restaurants;
					}

					if(results[num].location && results[num].name) {
						restaurants.push(results[num]);
						num++;
					}
				}

				return restaurants;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
