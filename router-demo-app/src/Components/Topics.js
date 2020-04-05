import React from "react";
import Topic from "./Topic";
import {
  Link,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";


function Topics() {
  let match = useRouteMatch();
  // console.log(useRouteMatch())

  return (
    <div>
      <h2>Sign Up Component!!!!</h2>

      <ul>
        <li>
          <Link to={`${match.url}/guide`}>Become a Guide</Link>
        </li>
        <li>
          <Link to={`${match.url}/user`}>Join an Adventure</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:userId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
