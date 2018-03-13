/**
 * Copyright (c) 2018， Silicon Valley Career Women.
   All rights reserved.
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RadioButton from 'material-ui/RadioButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import '../App.css';
import styles from './styles';


class GoalSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '1',
      programTopic1: 'Public Speaking',
      mentorRole1: 'Mentor',
      selfEvaluation1: 5,
      programTopic2: 'Public Speaking',
      mentorRole2: 'Mentor',
      selfEvaluation2: 5,
      programTopic3: 'Public Speaking',
      mentorRole3: 'Mentor',
      selfEvaluation3: 5
    };
  }

  setMentorRole = (event) => {
    this.setState({ [`mentorRole${this.state.currentTab}`]: event.target.value });
  }

  handleProgramChange = (event, index, value) => {
    this.setState({ [`programTopic${this.state.currentTab}`]: value });
  }

  handleScoreChange = (event, value) => {
    this.setState({ [`selfEvaluation${this.state.currentTab}`]: value * 10 });
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
            <CardTitle title="Goal Selection" titleColor="#ffffff" className="card-title" />
            <Tabs value={this.state.currentTab} onChange={this.handleTabChange} >
              <Tab label="Top 1" value="1" className="tab-title">
                <div>
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu
                      className="program-dropdown"
                      value={this.state.programTopic1}
                      onChange={this.handleProgramChange}
                  >
                    <MenuItem value="Public Speaking" primaryText="Public Speaking" />
                    <MenuItem value="Software Engineering" primaryText="Software Engineering" />
                    <MenuItem value="System Design" primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{ display: 'flex', flexDirection: 'row' }} className="mentor-role">
                    <RadioButton
                        label="Mentor"
                        value="Mentor"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole1 === 'Mentor'}
                    />
                    <RadioButton
                        label="Mentee"
                        value="Mentee"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole1 === 'Mentee'}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                      className="slider"
                      step={0.10}
                      value={this.state.selfEvaluation1 / 10}
                      style={
                        {
                          display: 'inline-block',
                          width: '280px',
                          height: '37.5px'
                        }
                      }
                      onChange={this.handleScoreChange}
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation1}`}</p>
                </div>
              </Tab>

              <Tab label="Top 2" value="2" className="tab-title">
                <div>
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu
                      className="program-dropdown"
                      value={this.state.programTopic2}
                      onChange={this.handleProgramChange}
                  >
                    <MenuItem value="Public Speaking" primaryText="Public Speaking" />
                    <MenuItem value="Software Engineering" primaryText="Software Engineering" />
                    <MenuItem value="System Design" primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{ display: 'flex', flexDirection: 'row' }} className="mentor-role">
                    <RadioButton
                        label="Mentor"
                        value="Mentor"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole2 === 'Mentor'}
                    />
                    <RadioButton
                        label="Mentee"
                        value="Mentee"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole2 === 'Mentee'}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                      className="slider"
                      step={0.10}
                      value={this.state.selfEvaluation2 / 10}
                      style={
                        {
                          display: 'inline-block',
                          width: '280px',
                          height: '37.5px'
                        }
                      }
                      onChange={this.handleScoreChange}
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation2}`}</p>
                </div>
              </Tab>
              <Tab label="Top 3" value="3" className="tab-title">
                <div>
                  <p className="interested-program-title">Interested Program Topics</p>
                  <DropDownMenu
                      className="program-dropdown"
                      value={this.state.programTopic3}
                      onChange={this.handleProgramChange}
                  >
                    <MenuItem value="Public Speaking" primaryText="Public Speaking" />
                    <MenuItem value="Software Engineering" primaryText="Software Engineering" />
                    <MenuItem value="System Design" primaryText="System Design" />
                  </DropDownMenu>

                  <p className="mentor-role-title">Would you like to be</p>
                  <div style={{ display: 'flex', flexDirection: 'row' }} className="mentor-role">
                    <RadioButton
                        label="Mentor"
                        value="Mentor"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole3 === 'Mentor'}
                    />
                    <RadioButton
                        label="Mentee"
                        value="Mentee"
                        style={{ display: 'block' }}
                        onClick={this.setMentorRole}
                        checked={this.state.mentorRole3 === 'Mentee'}
                    />
                  </div>

                  <p className="profession-title">Give yourself a score of your profession</p>
                  <Slider
                      className="slider"
                      step={0.10}
                      value={this.state.selfEvaluation3 / 10}
                      style={
                        {
                          display: 'inline-block',
                          width: '280px',
                          height: '37.5px'
                        }
                      }
                      onChange={this.handleScoreChange}
                  />
                  <p className="profession-score">{`${this.state.selfEvaluation3}`}</p>
                </div>
              </Tab>
            </Tabs>
            <br />
            <hr className="divider" />
            <RaisedButton
                label="Next"
                labelColor="#ffffff"
                backgroundColor={styles.button.color}
            />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default GoalSelection;
