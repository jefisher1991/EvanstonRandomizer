// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  restaurantName: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    default: "Evanston, Illinois",
    required: "Location is Required"
  },
  rating: {
    type: Number,
  },
  price_level: {
    type: Number,
  },

  comment: {
    type: String, 
  }
});

// Create the Model
var restaurant = mongoose.model('restaurant', RestaurantSchema);

// Export it for use elsewhere
module.exports = restaurant;