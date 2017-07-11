var axios = require('axios');


var API = "AIzaSyC585Jhr1eNvtH19TWMycNAZgthBaciGvA";
var evanston = new google.maps.LatLng(42.0483, -87.6821);

var map = new google.maps.Map(document.getElementById('app'), {
  center: evanston,
  zoom: 5
});

const service = new google.maps.places.PlacesService(map);



// Helper Functions
var helpers = {

	query: function(location, callback){
		// remember to swap location param with location key in object!
		const request =  {
		    location: evanston,
		    radius: '450',
		    query: 'restaurant'
 		};

		service.textSearch(request, callback);
	},

	postSaved: function(name, formatted_address) {
    	var newRestaurant = { restaurantName: name, location: formatted_address};
    	return axios.post("/api/saved", newRestaurant)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  	}


}




// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;