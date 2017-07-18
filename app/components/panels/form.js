
var React = require('react');

var helpers = require("../data")

var Form = React.createClass({

  getInitialState: function(){
    return {
      location: ""
    }
  },


 
  handleClick: function(e){
    e.preventDefault();
     helpers.query(this.state.location, function(response) {
      console.log(response);

       
      var randomizeRestaurants = [response[Math.floor( Math.floor(Math.random()*response.length))]];
      console.log(randomizeRestaurants)

      this.props.onResultChange(randomizeRestaurants);

     


    }.bind(this)) 
  },

  
  render: function(){

    return(

   
    
            <div className="wheelBody">
              <button className="spinTheWheel btn btn-primary" onClick={this.handleClick}> Spin the Wheel </button>
            </div>
   

    )
  } 
});

module.exports = Form;
