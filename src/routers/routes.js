import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/inc/Home";
import About from "../components/inc/About";
import Portfoglio from "../components/inc/Portfoglio";
import Resume from "../components/inc/Resume";
import Blog from "../components/inc/Blog";
import Contact from "../components/inc/Contact";
import Error404 from "../components/inc/Error404";

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
