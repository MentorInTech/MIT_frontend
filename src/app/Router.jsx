/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import ExampleRouting from '../pages/example-routing';
import UserInfo from '../pages/user-info';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/test" component={ExampleRouting} />
      <Route path="/user-info" component={UserInfo} />
    </Switch>
  </BrowserRouter>
);
