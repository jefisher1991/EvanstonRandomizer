var reactRoutes = require('react-router');
var React = require('react'); 
var ReactDOM = require('react-dom');
var Main = require("./components/Main");
// Grabs the Routes
var routes = require("../config/routes");
console.log(routes);


// Renders the contents according to the route page.
ReactDOM.render(<Main />, document.getElementById('app'));
