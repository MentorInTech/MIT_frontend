import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import styles from './styles';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="sign-up-card">
            <CardTitle title="Sign Up" titleColor="#ffffff" className="card-title"></CardTitle>
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
              hintText="Email"
              floatingLabelText="Email"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.email}
              onChange={
                (event) => {this.setState({email: event.target.value})}
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
            <TextField
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
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
              label="Sign Up"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
            />
            <hr className="divider"/>
            <Link to={`/login`}>
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
