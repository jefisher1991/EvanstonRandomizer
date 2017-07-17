// Include React
var React = require('react');
var routes = require ('react-router'); 

//require helpers

var helpers = require("../data");

// Component creation
var Results = React.createClass({

  getInitialState: function(){
    return {
      results: []
    }
  },

  
  // clickToSave: function(result){
  //   this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);
  // },

//index is the postiion of the array that you are iterating through 

  renderRestaurants: function() {
    return this.props.results.map(function(restaurant, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={0}>
          <li className="list-group-item">
              <ul>
                <span className="restaurantNameHeader">Name: 
                <p className="restaurantName"> {restaurant.name}</p>
                </span>

                <span className="restaurantHeader">Address:
                <p className="restaurantDetails">{restaurant.formatted_address}</p>
                </span>
                
                  <span className="restaurantHeader">Rating:
                  <p className="restaurantDetails">{restaurant.rating}</p>
                  </span>
               
                <span className="restaurantHeader">Price Level:
                 <p className="restaurantDetails">{restaurant.price_level}</p>
                 </span>

                  <span className="btn-group">
                <a href={restaurant.formatted_address} rel="noopener noreferrer" target="_blank"> </a>
                <button className="saveButton btn-default" onClick={() => this.handleClick(restaurant)}>Save Restaurant to Favorites</button>
                </span>
                 
              </ul>
           
          </li>

        </div>
      );

    }.bind(this));

  },

  handleClick: function(item) {
    console.log("saved restaurant");

    helpers.postSaved(item.name, item.formatted_address).then(function() {
      console.log("this was saved");
    });

  },





   render: function(){
    return(

      <div className="resultsPanel panel">
        <div className="resultsPanelHeader panel-heading">
          <h3 className="resultsText panel-title text-center">Results</h3>
        </div>
        <div className="resultsPanelOutline panel-body">
            {this.renderRestaurants()}
        </div>
      </div>
    )
  }
});

module.exports = Results;










//   // Here we render the function
// //   render: function(){
// //     return(

// //       <div className="panel panel-success">
// //         <div className="panel-heading">
// //           <h3 className="panel-title text-center">Results</h3>
// //         </div>
// //         <div className="panel-body">
// //             {JSON.stringify(this.props.results)}
// //         </div>
// //       </div>
// //     )
// //   }
// // });

// // Export the component back for use in other files