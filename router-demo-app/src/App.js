import React from "react";
import Topics from "./Components/Topics";

import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/SignUp/Guide">Become a Guide </Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/SignUp">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Landing Page!</h2>;
}

function About() {
  return <h2>About Component</h2>;
}

export default App;
