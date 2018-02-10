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
import Slider from 'material-ui/Slider';
import '../App.css';
import styles from './styles';


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
      programTopic: "Public Speaking",
      mentorRole: "Mentor",
      selfEvaluation: 5,
      tabs: [
        {
          programTopic: "Public Speaking",
          mentorRole: "Mentor",
          selfEvaluation: 5
        },
        {
          programTopic: "Public Speaking",
          mentorRole: "Mentor",
          selfEvaluation: 5
        },
        {
          programTopic: "Public Speaking",
          mentorRole: "Mentor",
          selfEvaluation: 5
        }
      ],
      goal: []
    }
  }

  handleProgramChange = (event, index, value) => {
    this.setState({programTopic: value});
    this.setNewGoalInTab();
  }

  setMentorRole = (value) => {
    this.setState({mentorRole: value});
    this.setNewGoalInTab();
  }

  setNewGoalInTab = () => {
    const index = parseInt(this.state.currentTab) - 1;
    const programTopic = this.state.programTopic;
    const mentorRole = this.state.mentorRole;
    const selfEvaluation = this.state.selfEvaluation;
    const newGoal = {
      programTopic,
      mentorRole,
      selfEvaluation
    };

    this.setState({tabs:[
      ...this.state.tabs.slice(0, index),
      newGoal,
      ...this.state.tabs.slice(index + 1)
    ]});
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
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu className="program-dropdown" value={this.state.programTopic} onChange={this.handleProgramChange}>
                    <MenuItem value={"Public Speaking"} primaryText="Public Speaking" />
                    <MenuItem value={"Software Engineering"} primaryText="Software Engineering" />
                    <MenuItem value={"System Design"} primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{display: 'flex', flexDirection: 'row'}} className="mentor-role">
                    <RadioButton
                      label="Mentor"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentor")}
                      checked={this.state.mentorRole === "Mentor"}
                    />
                    <RadioButton
                      label="Mentee"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentee")}
                      checked={this.state.mentorRole === "Mentee"}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                    className="slider"
                    step={0.10}
                    value={0.5}
                    style={
                      {
                        display: "inline-block",
                        width: "280px",
                        height: "37.5px"
                      }
                    }
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation}`}</p>
                </div>
              </Tab>

              <Tab label="Top 2" value="2">
                <div>
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu className="program-dropdown" value={this.state.programTopic} onChange={this.handleProgramChange}>
                    <MenuItem value={"Public Speaking"} primaryText="Public Speaking" />
                    <MenuItem value={"Software Engineering"} primaryText="Software Engineering" />
                    <MenuItem value={"System Design"} primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{display: 'flex', flexDirection: 'row'}} className="mentor-role">
                    <RadioButton
                      label="Mentor"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentor")}
                      checked={this.state.mentorRole === "Mentor"}
                    />
                    <RadioButton
                      label="Mentee"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentee")}
                      checked={this.state.mentorRole === "Mentee"}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                    className="slider"
                    step={0.10}
                    value={0.5}
                    style={
                      {
                        display: "inline-block",
                        width: "280px",
                        height: "37.5px"
                      }
                    }
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation}`}</p>
                </div>
              </Tab>
              <Tab label="Top 3" value="3">
                <div>
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu className="program-dropdown" value={this.state.programTopic} onChange={this.handleProgramChange}>
                    <MenuItem value={"Public Speaking"} primaryText="Public Speaking" />
                    <MenuItem value={"Software Engineering"} primaryText="Software Engineering" />
                    <MenuItem value={"System Design"} primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{display: 'flex', flexDirection: 'row'}} className="mentor-role">
                    <RadioButton
                      label="Mentor"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentor")}
                      checked={this.state.mentorRole === "Mentor"}
                    />
                    <RadioButton
                      label="Mentee"
                      style={{display: "block"}}
                      onClick={this.setMentorRole.bind(this, "Mentee")}
                      checked={this.state.mentorRole === "Mentee"}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                    className="slider"
                    step={0.10}
                    value={0.5}
                    style={
                      {
                        display: "inline-block",
                        width: "280px",
                        height: "37.5px"
                      }
                    }
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation}`}</p>
                </div>
              </Tab>
            </Tabs>
            <br/>
            <hr className="divider"/>
            <RaisedButton
              label="Next"
              labelColor="#ffffff"
              backgroundColor={styles.button.color}
            />
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default GoalSelection;
