/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExampleRouting from '../pages/example-routing';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/test" component={ExampleRouting} />
    </Switch>
  </BrowserRouter>
);
