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

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      passwordErrorText: "",
      confirmPasswordErrorText: ""
    }
  }

  /**
   * Update input value to state.password.
   * When the inputvalue is empty, show the error message.
   */
  passwordOnChange(event) {
    this.setState({password: event.target.value});
    if (this.state.password !== "") {
      this.setState({ passwordErrorText: ""});
    }
  }

  /**
   * Update input value to state.confirmPassword.
   * When the inputvalue is empty, show the error message.
   */
  confirmPasswordOnChange(event) {
    this.setState({confirmPassword: event.target.value});
    if (this.state.confirmPassword !== "") {
      this.setState({ confirmPasswordErrorText: ""});
    }
  }

  onChange(event) {
    console.log("clicked!");
    /** 
     * check the password strongness:
     * Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
     */
    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordVal = passwordRules.test(this.state.password);
    if (!passwordVal) {
      this.setState({ passwordErrorText: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"});
    } else {
      this.setState({ passwordErrorText: ""});
    }

    /**
     * Confirm the password. If the state.confirmpassword is not same witn the 
     * state.passowrd. Show the error message
     */
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({ confirmPasswordErrorText: "Password does not match, please try again"});
    } else {
      this.setState({ confirmPasswordErrorText: ""});
    }

  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="reset-password-card">
            <CardTitle title="Reset Password" titleColor="#ffffff" className="card-title"></CardTitle>
            <TextField
              hintText="New Password"
              floatingLabelText="New Password"
              type="password"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.password}
              errorText={this.state.passwordErrorText}
              onChange = {this.passwordOnChange.bind(this)}

            />
            <TextField
              hintText="Confirm New Password"
              floatingLabelText="Confirm New Password"
              type="password"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.confirmPassword}
              errorText={this.state.confirmPasswordErrorText}
              onChange = {this.confirmPasswordOnChange.bind(this)}
            />
            <br/>
            <br/>
            <RaisedButton
              label="Change Password"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
              onClick={
                this.onChange.bind(this)
              }
            />
            <hr className="divider"/>
            <Link to={`/login`}>
              <RaisedButton
                label="Log In"
                style={{ marginRight: '20px' }}
              />
            </Link>
            <Link to={`/signup`}>
              <RaisedButton
                label="Sign Up"
                style={{ marginLeft: '20px' }}
              />
            </Link>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ResetPassword;
