import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  </BrowserRouter>);
