/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import styles from './styles';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      password: null
    };
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="log-in-card">
            <CardTitle title="Log In" titleColor="#ffffff" className="card-title"></CardTitle>
            <TextField
              hintText="User Name"
              floatingLabelText="User Name"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.userName}
              onChange={
                (event) => {this.setState({userName: event.target.value})}
              }
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.password}
              onChange={
                (event) => {this.setState({password: event.target.value})}
              }
            />
            <br/>
            <br/>
            <RaisedButton
              label="Log In"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
            />
          <Link to={`/forget-password`} style={{ textDecoration: 'none' }}>
              <p className="forget-password">Forget Password?</p>
            </Link>
            <hr className="divider"/>
            <Link to={`/signup`}>
              <RaisedButton
                label="Sign Up"
              />
            </Link>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
