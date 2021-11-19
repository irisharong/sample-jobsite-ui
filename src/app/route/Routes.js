import * as React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
// pages for this product
import RegisterProfile from "views/Registration/RegisterProfile.js";
import LoginPage from "views/Registration/LoginPage.js";
import Welcome from "views/Registration/Welcome.js";
import JobSeekerProfile from "views/Profile/JobSeekerProfile.js";
import EmployerProfile from "views/Profile/EmployerProfile.js";
import JobDetail from "views/JobDetailPage/JobDetail.js";
import FindWork from "views/Search/FindJob.js";
import FindHelp from "views/Search/FindHelp.js";
import YourJobs from "components/Profile/Contractor/YourJobs.js";

var hist = createBrowserHistory();

const Routes = props =>
  <Router history={hist}>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterProfile} />
      <Route exact path="/" component={FindWork} />
      <AuthRoutes>
        <Route exact path="/employer" component={EmployerProfile} />
        <Route exact path="/settings" component={JobSeekerProfile} />
        <Route exact path="/candidate/:id" component={JobSeekerProfile} />
        <Route exact path="/job-detail" component={JobDetail} />
        <Route exact path="/help" component={FindHelp} />
        <Route exact path="/jobs" component={YourJobs} />
      </AuthRoutes>
    </Switch>
  </Router>

export default Routes;