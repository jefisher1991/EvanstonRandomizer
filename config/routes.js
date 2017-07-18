
// var react = require("react"); 


// var React = require("react");

// // Include the react-router module
// var router = require("react-router");

// // Include the Route component for displaying individual routes
// var Route = router.Route;

// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// var Main = require("../app/components/Main");
// console.log(Main);
// var Game = require("../app/components/Game");
// console.log(Game);


// module.exports = () =>{ 
// 	return ( 
// 		<Router history={ hashHistory }>
// 		  <Route path="/" component={ Main } />
// 		  <Route path="/Game" component={ Game } />
// 		  <IndexRoute component={ Main } />
// 		</Router>
// 	)
// }; 
   
// Inclue the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Include the Router component
var Router = router.Router;
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;
// Reference the high-level components
var Main = require("../app/components/Main");
var Game = require("../app/components/Game");
var Saved = require("../app/components/panels/Saved");
// Export the Routes
module.exports = () => {
  return (
  // High level component is the Router component.
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/Saved" component={Saved} />
      <Route path="signup" Redirect to={Game}/>
      
    </Router>
  );
}
