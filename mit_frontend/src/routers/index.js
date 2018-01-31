/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import UserInfo from './UserInfo';
import GoalSelection from './GoalSelection';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/user-info" component={UserInfo} />
      <Route path="/goal-selection" component={GoalSelection} />
    </Switch>
  </BrowserRouter>);
