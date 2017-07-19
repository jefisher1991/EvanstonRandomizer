// Include React as a dependency
var React = require("react");
var axios = require("axios");

// Include the data file (for the saved recall)
var helpers = require("../data.js");

// Create the Main component
var Saved = React.createClass({

  getInitialState: function() {
    return { savedRestaurants: [] };

  },

  // When this component mounts, get all saved restaurants from our db

  //whenever the component renders to the screen for the first time

  //only gets called one time for the components life on the screen

  //putting data initializaiton in here makes sense, when you call setState

  //it renders the component with that data.

componentDidMount: function() {
    helpers.getSaved().then(function(restaurantData) {
      this.setState({ savedRestaurants: restaurantData.data });
      console.log("saved results", restaurantData.data);
    }.bind(this));
  },




// This code handles the deleting saved restaurants from our database
  handleClick: function(item) {
    // console.log(item);

    // Delete the list!
    helpers.deleteSaved(item).then(function() {
      // Get the revised list!
      helpers.getSaved().then(function(restaurantData) {
        this.setState({ savedRestaurants: restaurantData.data });
        console.log("saved results", restaurantData.data);
      }.bind(this));

    }.bind(this));
  },
  // removeRestaurant: function(rest) {
  //   return axios.delete("/api/saved", {
  //       params: {
  //         id: rest._id
  //       }
  //   })
  //   .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //   });
  // },
  // A helper method for rendering the HTML when we have no saved restaurants
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first restaurant...</em>
          </span>
        </h3>
      </li>
    );
  },

  // A helper method for mapping through our restairants and outputting some HTML

 //A helper method for mapping through our restaurants and outputting some HTML

   //this.state always refers to your state and above the state of saved restaurants
  renderRestaurants: function() {

    return this.state.savedRestaurants.map(function(restaurant, index){
    return (
        <div key={index}>
          <li className="savedItems list-group-item">
            
              <span>
                <em>{restaurant.restaurantName}</em>
              </span>

              <br />

              <div id="restaurant-address">
              {restaurant.location}
              </div>
               
              <button className="deleteButton pull-right btn btn-primary" onClick={() => this.handleClick(restaurant)}>X</button>
             
           </li>
        </div>
      );
    }.bind(this));

    },

    // A helper method for rendering a container and all of our restaurants inside

  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderRestaurants()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {  return(
  <div className="savedPanel panel">
        <div className="resultsPanelHeader panel-heading">
          
        </div>
        <div className="resultsPanelOutline panel-body">
            {this.renderRestaurants()}
        </div>
      </div>
    )
  }
});

// Export the module back to the route
module.exports = Saved;
