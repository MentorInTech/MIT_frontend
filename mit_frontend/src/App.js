import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

const styles = {
  textField: {
    text: {
      color: '#3F51B5'
    },
    underline: {
      borderColor: '#3F51B5'
    },
    error: {
      color: '#bf2a5c'
    }
  },
  button: {
    color: '#4285F4',
    label: {
      color: '#ffffff'
    }
  }
}

class App extends Component {
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
            <RaisedButton
              label="Log In"
            />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
