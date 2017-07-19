// Include React as a dependency
var React = require("react");

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
    // console.log("CLICKED");
    // console.log(item);

    // Delete the list!
    helpers.deleteSaved(item.name, item.formatted_address).then(function() {

      // Get the revised list!
      helpers.getSaved().then(function(restaurantData) {
        this.setState({ savedRestaurants: restaurantData.data });
        console.log("saved results", restaurantData.data);
      }.bind(this));

    }.bind(this));
  },
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
          <li className="list-group-item">
            <h3>
              <span>
                <em>{restaurant.restaurantName}</em>
              </span>
              <br />

              <div id="restaurant-address">
              {restaurant.location}
              </div>
              <span className="btn-group pull-right">
                <a href={restaurant.formatted_address} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Restaurant</button>
                </a>
                
                 <button className="btn btn-primary" onClick={() => this.handleClick(restaurant)}>Delete</button>
              </span>
            </h3>
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
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Restaurant</strong>
                </h1>
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
  <div className="resultsPanel panel">
        <div className="resultsPanelHeader panel-heading">
          <h3 className="resultsText panel-title text-center">Saved Restaurants</h3>
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