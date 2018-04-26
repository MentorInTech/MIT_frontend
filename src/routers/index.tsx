/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from 'react';

import Landing from '../pages/landing';
import SignUp from '../pages/sign-up';
import SignIn from '../pages/sign-in';

export default () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Landing} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  </Router>
);
