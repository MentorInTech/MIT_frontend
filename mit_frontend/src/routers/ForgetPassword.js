import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import styles from './styles';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="forget-password-card">
            <CardTitle title="Forget Password?" titleColor="#ffffff" className="card-title"></CardTitle>
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
            <br/>
            <br/>
            <RaisedButton
              label="Reset Password"
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

export default ForgetPassword;
