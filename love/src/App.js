import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header"
import './App.css'
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
      <section>
        <Header></Header>
        <Router>
          <div>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </div>
        </Router>
      </section>
      
    );
  }
}

export default App;
