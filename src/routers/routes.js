import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Portfoglio from "../components/Portfoglio";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Error404 from "../components/Error404";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" strict component={Home} />
    <Route exact path="/about" component={withRouter(About)} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/portfoglio" component={Portfoglio} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contact" component={withRouter(Contact)} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
