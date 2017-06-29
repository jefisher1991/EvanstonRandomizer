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

  // Here we render the function
  render: function(){
    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
            {JSON.stringify(this.props.results)}
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;
