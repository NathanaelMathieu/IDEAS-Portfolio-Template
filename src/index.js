import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { About, Contact } from "./pages/";
import { NotFound, Projects } from "./pages";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Cube } from "./pages/projects/";
import React from "react";
import ReactDOM from "react-dom";


const routing =
  <Router>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/cube" component={Cube} />
      <Route component={NotFound} />
    </Switch>
  </Router>;

ReactDOM.render(
routing,
document.getElementById("root")
);

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
