/* eslint-disable */

/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../App.css';
import styles from './styles';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      userNameErrorText: '',
      passwordErrorText: ''
    };
  }

  /**
   * This function is called when sign up button clicked. Will check all the fields, if there
   * is any empty fields in TextField, highlight the field.
   */
  onChange() {
    if (!this.state.userName) {
      this.setState({ userNameErrorText: 'This field is required' });
    } else {
      this.setState({ userNameErrorText: '' });
    }

    if (!this.state.password) {
      this.setState({ passwordErrorText: 'This field is required' });
    } else {
      this.setState({ passwordErrorText: '' });
    }
  }

  /**
   * Update input value to state.userName.
   * When the inputvalue is empty, show the error message.
   */
  userNameOnChange(event) {
    this.setState({ userName: event.target.value });
    if (this.state.userName) {
      this.setState({ userNameErrorText: '' });
    }
  }

  /**
   * Update input value to state.password.
   * When the inputvalue is empty, show the error message.
   */
  passwordOnChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password) {
      this.setState({ passwordErrorText: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="log-in-card">
            <CardTitle title="Log In" titleColor="#ffffff" className="card-title" />
            <TextField
                hintText="User Name"
                floatingLabelText="User Name"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.userName}
                errorText={this.state.userNameErrorText}
                maxLength="10"

                /* eslint-disable react/jsx-no-bind */
                // TODO: We should figure out a way to avoid using `bind`; see the following for why:
                //       https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
                onChange={this.userNameOnChange.bind(this)}
                /* eslint-enable */
            />
            <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.password}
                errorText={this.state.passwordErrorText}
                /* eslint-disable react/jsx-no-bind */
                // TODO: We should figure out a way to avoid using `bind`; see the following for why:
                //       https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
                onChange={this.passwordOnChange.bind(this)}
                /* eslint-enable */
            />
            <br />
            <br />
            <Button
                variant="raised"
                label="Log In"
                labelColor="#ffffff"
                backgroundColor={styles.button.color}
                /* eslint-disable react/jsx-no-bind */
                // TODO: We should figure out a way to avoid using `bind`; see the following for why:
                //       https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
                onClick={this.onChange.bind(this)}
                /* eslint-enable */
            />
            <Link to="/forget-password" style={{ textDecoration: 'none' }}>
              <p className="forget-password">Forget Password?</p>
            </Link>
            <hr className="divider" />
            <Link to="/signup">
              <Button
                  variant="raised"
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
