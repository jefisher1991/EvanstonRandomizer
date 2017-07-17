
var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var login = require("../components/Login");
var form = require("../components/form");
var results = require("../components/results");
var results = require("../components/login-prompt");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={login-prompt}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="login-prompt" component={login-prompt} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="Login" component={Login} />
        

        <IndexRoute component={Login} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Main" component={Child2} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Child1} />

    </Route>
  </Router>
);
