
var React = require('react');

var helpers = require('../data.js')

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

      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title text-center">SEARCH RESTAURANTS</h2>
        </div>
        <div className="panel-body text-center">
            <form >
              <button className="btn btn-primary" onClick={this.handleClick}>Play Restaurant Roulette!! </button>
            </form>
        </div>
      </div>

    )
  } 
});

module.exports = Form;
