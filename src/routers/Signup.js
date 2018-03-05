/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import styles from './styles';

class Signup extends Component {
  constructor(props) {
    super(props);
    /**
     * this.state is a react property to store data. It will be updated by
     * this.setState()
     */
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userNameErrorText: '',
      passwordErrorText: '',
      emailErrorText: '',
      confirmPasswordErrorText: ''
    };
  }
  /**
   * This is React built-in life cycle function. This function is called after
   * Compount UI update. In React, in default every components will update if any change.
   * This function now is only for demo data is successfully updated to state.
   * @param {null}
   * @return {null}
   */
  componentDidUpdate() {
    console.log(this.state);
  }

  /**
   * This function is called when sign up button clicked. Will check all the fields, if there
   * is any empty fields in TextField, highlight the field.
   */
  onChange() {
    if (this.state.userName === '') {
      this.setState({ userNameErrorText: 'This field is required' });
    } else {
      this.setState({ userNameErrorText: '' });
    }

    /**
     * check the password strongness:
     * Minimum eight characters, at least one uppercase letter, one lowercase letter,
     * one number and one special character
     */
    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    const passwordVal = passwordRules.test(this.state.password);
    if (!passwordVal) {
      this.setState({
        passwordErrorText:
            'Minimum eight characters, at least one uppercase letter, one lowercase letter,'
            + ' one number and one special character'
      });
    } else {
      this.setState({ passwordErrorText: '' });
    }

    /**
     * validate the email address:
     *
     * Example of valid email id:
     * mysite@ourearth.com
     * my.ownsite@ourearth.org
     * mysite@you.me.net
     *
     * Example of invalid email id:
     * mysite.ourearth.com [@ is not present]
     * mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
     * @you.me.net [ No character before @ ]
     * mysite123@gmail.b [ ".b" is not a valid tld ]
     * mysite@.org.org [ tld can not start with dot "." ]
     * .mysite@mysite.org [ an email should not be start with "." ]
     *  mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
     *  mysite..1234@yahoo.com [double dots are not allowed]
     */
    const emailRules = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailVal = emailRules.test(this.state.email);
    if (!emailVal) {
      this.setState({ emailErrorText: 'Not valid email, please try again.' });
    } else {
      this.setState({ emailErrorText: '' });
    }


    /**
     * Confirm the password. If the state.confirmpassword is not same witn the
     * state.passowrd. Show the error message
     */
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({ confirmPasswordErrorText: 'Password does not match, please try again' });
    } else {
      this.setState({ confirmPasswordErrorText: '' });
    }
  }

  /**
   * Update input value to state.userName.
   * When the inputvalue is empty, show the error message.
   */
  userNameOnChange(event) {
    this.setState({ userName: event.target.value });
    if (this.state.userName !== '') {
      this.setState({ userNameErrorText: '' });
    }
  }

  /**
   * Update input value to state.password.
   * When the inputvalue is empty, show the error message.
   */
  passwordOnChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password !== '') {
      this.setState({ passwordErrorText: '' });
    }
  }

  /**
   * Update input value to state.email.
   * When the inputvalue is empty, show the error message.
   */
  emailOnChange(event) {
    this.setState({ email: event.target.value });
    if (this.state.email !== '') {
      this.setState({ emailErrorText: '' });
    }
  }

  /**
   * Update input value to state.confirmPassword.
   * When the inputvalue is empty, show the error message.
   */
  confirmPasswordOnChange(event) {
    this.setState({ confirmPassword: event.target.value });
    if (this.state.confirmPassword !== '') {
      this.setState({ confirmPasswordErrorText: '' });
    }
  }

  /**
   * This function is required for each react component. Render function returns
   * UI components and render them in browser.
   * @param {null}
   * @return {null}
   */
  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="sign-up-card">
            <CardTitle title="Sign Up" titleColor="#ffffff" className="card-title" />
            /**
             * Each component is imported in the beginning of the file and called
             * by wrapping component name in tag.
             * Each React component has props to either change style, retrive
             * data from input or dispatch actions.
             * Ex:
             * Props for TextField:
             *   hintText, floatingLabelText, floatingLabelFocusStyle, underlineFocusStyle,
             *   value, onChange
             * You can look up for props in material-ui web page.
             * For this example, TextField props can be found in the end of the page in following link:
             * http://www.material-ui.com/#/components/text-field
             */
            <TextField
                hintText="User Name"
                floatingLabelText="User Name"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.userName}
                errorText={this.state.userNameErrorText}
                maxLength="10"
                onChange={event => this.userNameOnChange(event)}
            />
            <TextField
                hintText="Email"
                floatingLabelText="Email"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.email}
                errorText={this.state.emailErrorText}
                onChange={event => this.emailOnChange(event)}
            />
            <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.password}
                errorText={this.state.passwordErrorText}
                onChange={event => this.passwordOnChange(event)}
            />
            <TextField
                hintText="Confirm Password"
                floatingLabelText="Confirm Password"
                type="password"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.confirmPassword}
                errorText={this.state.confirmPasswordErrorText}
                onChange={event => this.confirmPasswordOnChange(event)}
            />
            <br />
            <br />
            <RaisedButton
                label="Sign Up"
                labelColor="#ffffff"
                backgroundColor={styles.button.color}
                onClick={() => this.onChange()}
            />
            <hr className="divider" />
            <Link to="/login">
              <RaisedButton
                  label="Log In"
              />
            </Link>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Signup;
