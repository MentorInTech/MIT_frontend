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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RadioButton from 'material-ui/RadioButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../App.css';

class GoalSelection extends Component {
  constructor(props) {
    super(props);
    /**
     * states:
     * Goal: [
       {
       programTopic: "",
       mentorRole: "",
       selfValudation: 0
       },
       {
       programTopic: "",
       mentorRole: "",
       selfValudation: 0
       },
       {
       programTopic: "",
       mentorRole: "",
       selfValudation: 0
       }
     ]
     */
    this.state = {
      currentTab: "1",
      goal: []
    }
  }

  handleTabChange = (value) => {
    this.setState({
      currentTab: value
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="goal-selection-card">
            <CardTitle title="Goal Selection" titleColor="#ffffff" className="card-title"></CardTitle>
            <Tabs value={this.state.currentTab} onChange={this.handleTabChange} >
              <Tab label="Top 1" value="1">
                <div>
                  <p>Interested Program Topics</p>
                    <DropDownMenu value={this.state.age} onChange={this.handleAgeChange}>
                      <MenuItem value={"Under 22"} primaryText="Under 22" />
                      <MenuItem value={"22 - 25"} primaryText="22 - 25" />
                    </DropDownMenu>
                  <p>Would you like to be</p>
                  <RadioButton
                    label="Internship"
                  />
                  <RadioButton
                    label="Full-time"
                  />
                  <p>Give yourself a score of your profession</p>

                </div>
              </Tab>
              <Tab label="Top 2" value="2">
                <div>
                  <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                  </p>
                </div>
              </Tab>
              <Tab label="Top 3" value="3">
                <div>
                  <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default GoalSelection;
