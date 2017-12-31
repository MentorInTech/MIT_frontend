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
      password: null,
      confirmPassword: null
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
              onChange={
                (event) => {this.setState({password: event.target.value})}
              }
            />
            <TextField
              hintText="Confirm New Password"
              floatingLabelText="Confirm New Password"
              type="password"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.confirmPassword}
              onChange={
                (event) => {this.setState({confirmPassword: event.target.value})}
              }
            />
            <br/>
            <br/>
            <RaisedButton
              label="Change Password"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
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
