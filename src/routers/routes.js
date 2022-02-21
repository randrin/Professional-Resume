import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../components/inc/Home";
import About from "../components/inc/About";
import Portfoglio from "../components/inc/Portfoglio";
import Resume from "../components/inc/Resume";
import Blog from "../components/inc/Blog";
import Contact from "../components/inc/Contact";
import Error404 from "../components/inc/Error404";
import Privacy from "../components/inc/Privacy";
import Condition from "../components/inc/Condition";
import {
  END_POINT_ABOUT,
  END_POINT_BLOG,
  END_POINT_CONDITION,
  END_POINT_CONTACT,
  END_POINT_HOME,
  END_POINT_PORTOFOGLIO,
  END_POINT_PRIVACY,
  END_POINT_RESUME,
} from "./endPoints";

const Routes = (props) => (
  <Switch>
    <Route exact path={END_POINT_HOME} strict component={Home} />
    <Route exact path={END_POINT_ABOUT} component={withRouter(About)} />
    <Route exact path={END_POINT_RESUME} component={Resume} />
    <Route exact path={END_POINT_PORTOFOGLIO} component={Portfoglio} />
    <Route exact path={END_POINT_PRIVACY} component={Privacy} />
    <Route exact path={END_POINT_CONDITION} component={Condition} />
    <Route exact path={END_POINT_BLOG} component={Blog} />
    <Route exact path={END_POINT_CONTACT} component={withRouter(Contact)} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
