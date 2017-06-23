// Include React
var React = require('react');

// Component creation
var Form = React.createClass({

  getInitialState: function(){
    return {
      location: ""
    }
  },

  // This function will respond to the user input
  handleChange: function(event){

      // Here we create syntax to capture any change in text to the query terms (pre-search).
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

  // When a user submits...
  handleClick: function(){

    // Set the parent to have the search term
    this.props.setTerm(this.state.location);

  },

  // Here we render the function
  render: function(){

    return(

      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title text-center">SEARCH RESTAURANTS</h2>
        </div>
        <div className="panel-body text-center">
            <form>
              <div className="form-group">
                <h5 className="">Location (Required)</h5>
                <input type="text" className="form-control text-center" id="location" onChange= {this.handleChange} required/>
              </div>
            
        
              <button className="btn btn-primary" onClick={this.handleClick}>Play Restaurant Roulette!! </button>

            </form>
        </div>
      </div>
    )
  }  // <div className="form-group">
              //   <h5 className="">Food Type (Optional) </h5>
              //   <input type="text" className="form-control text-center" id="foodType" onChange= {this.handleChange} />
              // </div>
});

// Export the component back for use in other files
module.exports = Form;
