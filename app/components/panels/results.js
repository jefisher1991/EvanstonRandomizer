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

  componentWillReceiveProps: function(props){
    var that = this;
    var myResults = props.results.map(function(search, i){
      var click = that.clickToSave.bind(that, search);
      return <div className="list-group-item" key={i}>
      <h1>hi</h1>
      </div>
    // <a href={search.web_url} target="_blank">{search.headline.main}</a> {search.pub_date} <button className="btn btn-success" onClick={click}>Save Article</button></div>
    });
    
    // myResults.push(props.results);
    // console.log(props.results);
    // alert(props.results);

    this.setState({results: myResults});
  },

  // Here we render the function
  render: function(){
    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
            {this.state.results}
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;
