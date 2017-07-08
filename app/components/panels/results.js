// Include React
var React = require('react');

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
    console.log('this was called')
    return this.props.results.map(function(restaurant, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
              <ul>
                <span>{restaurant.name}</span>
                <span>{restaurant.formatted_address}</span>
                 <span>{restaurant.icon}</span>
                 <span>{restaurant.opening_hours.open_now}</span>
                 <span>{restaurant.rating}</span>
                 <span>{restaurant.price_level}</span>
              </ul>
           
           
            


              <span className="btn-group pull-right">
                <a href={restaurant.formatted_address} rel="noopener noreferrer" target="_blank">
                  
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                  //when you have a button do onclick and bring ina function and this.handleClick
                  //assigns the function to this button 

                  //handle click is receiving the article 
                */}
                <button className="btn btn-primary" onClick={() => this.handleClick(restaurant)}>Save</button>
              </span>
            

          </li>

        </div>
      );

    }.bind(this));

  },


  handleClick: function(item) {
    console.log("saved restaurant");


  },





   render: function(){
    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
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
