/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from 'react';

import ForgetPassword from '../pages/forget-password';
import Landing from '../pages/landing';
import ResetPassword from '../pages/reset-password';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </Router>
);
