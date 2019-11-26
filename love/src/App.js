import React, { Component } from 'react';
// import { Button } from 'antd'
// import './App.css';
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";
import routes from "./routes";
import './App.css';
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
    );
  }
}

export default App;
