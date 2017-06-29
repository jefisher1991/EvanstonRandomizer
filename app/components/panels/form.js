
var React = require('react');

var helpers = require('../data.js')

var Form = React.createClass({

  getInitialState: function(){
    return {
      location: ""
    }
  },
  
  handleChange: function(event){

    this.setState({location: event.target.value});

  },

 
  handleClick: function(e){
    e.preventDefault();

    helpers.query(this.state.location, function(response) {
      console.log(response);
      // var apiRestaurants =[];
      // var results = (response.data.results)

      // apiRestaurants.push(results); 

      // console.log(apiRestaurants);
      // this.props.onResultChange(response);
      this.props.onResultChange(response);
      // for (var i=0; i<response.data.results.length; i++) {
      //  console.log(response[i]);
      // }
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
              <div className="form-group">
                <h5 className="">Location (Required)</h5>
                <input type="text" className="form-control text-center" id="location" onChange= {this.handleChange} required/>
              </div>
            
        
              <button className="btn btn-primary" onClick={this.handleClick}>Play Restaurant Roulette!! </button>
            </form>
        </div>
      </div>

    )
  } 
});

module.exports = Form;
