import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="sign-up-card">
            <CardTitle title="Sign Up" className="card-title">

            </CardTitle>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
