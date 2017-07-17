// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

var Main = require("../app/components/Main");
var game = require("../app/components/Game");
var form = require("../app/components/panels/form");
var results = require("../app/components/panels/results");

ReactDOM.render((
<Router history={ hashHistory }>
  <Route path="/" component={ Main }>
    <IndexRoute component={ Index } onSubmit={ requireAuth } />
    <Route path="./Game" component={ Game } onSubmit={ "./Game" } />
  </Route>
</Router>
)); 