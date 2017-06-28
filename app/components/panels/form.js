
var React = require('react');


var Form = React.createClass({

  getInitialState: function(){
    return {
      location: ""
    }
  },

  
  handleChange: function(event){


      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

 
  handleClick: function(){

    this.props.setTerm(this.state.location);

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
