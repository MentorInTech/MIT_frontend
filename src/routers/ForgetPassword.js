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

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailErrorText: '',
      passValidation: false
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }


  onChange = () => {
    if (this.state.email) {
      this.setState({ emailErrorText: 'This field is required' });
    } else {
      this.setState({ emailErrorText: '', passValidation: true });
    }
  }

  /**
   * Update input value to state.email.
   * When the inputvalue is empty, show the error message.
   */
  emailOnChange(event) {
    this.setState({ email: event.target.value });
    if (this.state.email) {
      this.setState({ emailErrorText: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="forget-password-card">
            <CardTitle title="Forget Password?" titleColor="#ffffff" className="card-title" />
            <TextField
                hintText="Email"
                floatingLabelText="Email"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                type="email"
                errorText={this.state.emailErrorText}
                onChange={this.emailOnChange}
            />
            <br />
            <br />
            <Link to={{
              pathname: '/reset-password',
              state: { passValidation: true }
            }}
            >
              <RaisedButton
                  label="Reset Password"
                  labelColor="#ffffff"
                  backgroundColor={styles.button.color}
                  onClick={this.onChange}
              />
            </Link>
            <hr className="divider" />
            <Link to="/login">
              <RaisedButton
                  label="Log In"
                  style={{ marginRight: '20px' }}
              />
            </Link>
            <Link to="/signup">
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

export default ForgetPassword;
