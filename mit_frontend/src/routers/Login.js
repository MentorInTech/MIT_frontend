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
      userName: "",
      password: "",
      userNameErrorText: "",
      passwordErrorText: "",
    };
  }

  /**
   * Update input value to state.userName.
   * When the inputvalue is empty, show the error message.
   */
  userNameOnChange(event) {
    this.setState({userName: event.target.value});
    if (this.state.userName) {
      this.setState({ userNameErrorText: ""});
    }
  }

  /**
   * Update input value to state.password.
   * When the inputvalue is empty, show the error message.
   */
  passwordOnChange(event) {
    this.setState({password: event.target.value});
    if (this.state.password) {
      this.setState({ passwordErrorText: ""});
    }
  }

  /**
   * This function is called when sign up button clicked. Will check all the fields, if there
   * is any empty fields in TextField, highlight the field.
   */
  onChange(event) {
    if (!this.state.userName) {
      this.setState({ userNameErrorText: "This field is required"});
    } else {
      this.setState({ userNameErrorText: ""});
    }

    if (!this.state.password) {
      this.setState({ passwordErrorText: "This field is required"});
    } else {
      this.setState({ passwordErrorText: ""});
    }


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
              errorText={this.state.userNameErrorText}
              maxLength="10"
              onChange={ this.userNameOnChange.bind(this) }
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.password}
              errorText={this.state.passwordErrorText}
              onChange = {this.passwordOnChange.bind(this)}
            />
            <br/>
            <br/>
            <RaisedButton
              label="Log In"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
              onClick={
                this.onChange.bind(this)
              }
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
