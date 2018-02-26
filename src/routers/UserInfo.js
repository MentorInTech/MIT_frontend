/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RadioButton from 'material-ui/RadioButton';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import '../App.css';
import styles from './styles';

// Initiate Job Year
const jobYears = [];
for (let i = 0; i <= 50; i += 1) {
  jobYears.push(<MenuItem value={i} key={i} primaryText={i} />);
}
// Initiate Grad Year
const thisYear = new Date().getFullYear();
const gradYears = [];
for (let i = thisYear; i >= 1900; i -= 1) {
  gradYears.push(<MenuItem value={i} key={i} primaryText={i} />);
}
class UserInfo extends Component {
  constructor(props) {
    super(props);
    /**
     * this.state is a react property to store data. It will be updated by
     * this.setState()
     */
    this.state = {
      firstName: '',
      lastname: '',
      age: 'Under 22',
      city: '',
      jobRole: 'Internship',
      jobCategory: '',
      jobLevel: '',
      jobYears: -1,
      degree: '',
      school: '',
      major: '',
      gradYear: 0,
      interest: ''
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
  setJobRole = jobRole => this.setState({ jobRole });

  handleAgeChange = (event, index, value) => this.setState({ age: value });

  handleCategoryChange = (event, index, value) => this.setState({ jobCategory: value });

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
          <Card className="user-info-card">
            <CardTitle title="User Information" titleColor="#ffffff" className="card-title" />
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
            <p>Name</p>
            <TextField
                hintText="First Name"
                floatingLabelText="First Name"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.firstName}
                onChange={
                  (event) => { this.setState({ firstName: event.target.value }); }
                }
            />
            <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.lastName}
                onChange={
                  (event) => { this.setState({ lastName: event.target.value }); }
                }
            />
            <p>Age</p>
            <DropDownMenu value={this.state.age} onChange={this.handleAgeChange}>
              <MenuItem value="Under 22" primaryText="Under 22" />
              <MenuItem value="22 - 25" primaryText="22 - 25" />
              <MenuItem value="26 - 30" primaryText="26 - 30" />
              <MenuItem value="31 - 35" primaryText="31 - 35" />
              <MenuItem value="36 - 40" primaryText="36 - 40" />
              <MenuItem value="41 - 45" primaryText="41 - 45" />
              <MenuItem value="46 - 50" primaryText="46 - 50" />
              <MenuItem value="51 - 55" primaryText="51 - 55" />
              <MenuItem value="56 - 60" primaryText="56 - 60" />
              <MenuItem value="Above 60" primaryText="Above 60" />
            </DropDownMenu>
            <p>Location</p>
            <TextField
                hintText="City"
                floatingLabelText="City"
                type="city"
                floatingLabelFocusStyle={styles.textField.text}
                underlineFocusStyle={styles.textField.underline}
                value={this.state.city}
                onChange={
                  (event) => { this.setState({ city: event.target.value }); }
                }
            />
            <p>Job</p>
            <RadioButton
                label="Internship"
                /* eslint-disable react/jsx-no-bind */
                // TODO: We should figure out a way to avoid using `bind`; see the following for why:
                //       https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
                onClick={this.setJobRole.bind(this, 'Internship')}
                /* eslint-enable */
                checked={this.state.jobRole === 'Internship'}
            />
            <RadioButton
                label="Full-time"
                /* eslint-disable react/jsx-no-bind */
                // TODO: We should figure out a way to avoid using `bind`; see the following for why:
                //       https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
                onClick={this.setJobRole.bind(this, 'Full-time')}
                /* eslint-enable */
                checked={this.state.jobRole === 'Full-time'}
            />
            <DropDownMenu value={this.state.jobCategory} onChange={this.handleCategoryChange}>
              <MenuItem value="" primaryText="Category" />
              <MenuItem
                  value="Engineering & Technology"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Engineering & Technology"
                  menuItems={[
                    <MenuItem value="Software Engineer" primaryText="Software Engineer" />,
                    <MenuItem value="Product Manager" primaryText="Product Manager" />,
                    <MenuItem value="Sales Engineer" primaryText="Sales Engineer" />,
                    <MenuItem value="Electrical Engineer" primaryText="Electrical Engineer" />,
                    <MenuItem value="Sourcing/Supply Chain" primaryText="Sourcing/Supply Chain" />,
                    <MenuItem value="Mechanical Engineer" primaryText="Mechanical Engineer" />,
                    <MenuItem value="Manufacturing Engineer" primaryText="Manufacturing Engineer" />,
                    <MenuItem value="Industrial Designer" primaryText="Industrial Designer" />,
                    <MenuItem value="Data Scientist" primaryText="Data Scientist" />
                  ]}
              />
              <MenuItem
                  value="Marketing & Communications"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Marketing & Communications"
                  menuItems={[
                    <MenuItem value="Marketing" primaryText="Marketing" />,
                    <MenuItem value="Public Relations" primaryText="Public Relations" />,
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Communications" primaryText="Communications" />,
                    <MenuItem value="Event Planner" primaryText="Event Planner" />
                  ]}
              />
              <MenuItem
                  value="Business Strategy"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Business Strategy"
                  menuItems={[
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Strategy & Operations" primaryText="Strategy & Operations" />,
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Program Manager" primaryText="Program Manager" />
                  ]}
              />
              <MenuItem
                  value="Sales, Service & Support"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Sales, Service & Support"
                  menuItems={[
                    <MenuItem value="Account Manager" primaryText="Account Manager" />,
                    <MenuItem value="Business Partnerships" primaryText="Business Partnerships" />,
                    <MenuItem value="New Business Sales" primaryText="New Business Sales" />,
                    <MenuItem value="Solutions Consultant" primaryText="Solutions Consultant" />,
                    <MenuItem value="Program Manager" primaryText="Program Manager" />,
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Trainer/Instructional Designer" primaryText="Trainer/Instructional Designer" />,
                    <MenuItem value="Strategy & Operations" primaryText="Strategy & Operations" />,
                    <MenuItem value="Technical Solutions Engineer" primaryText="Technical Solutions Engineer" />
                  ]}
              />
              <MenuItem
                  value="Design"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Design"
                  menuItems={[
                    <MenuItem value="UX Engineer" primaryText="UX Engineer" />,
                    <MenuItem value="Visual Designer" primaryText="Visual Designer" />,
                    <MenuItem value="Motion Designer" primaryText="Motion Designer" />,
                    <MenuItem value="Interaction Designer" primaryText="Interaction Designer" />,
                    <MenuItem value="UX Researcher" primaryText="UX Researcher" />,
                    <MenuItem value="Content Strategist/UX Writer" primaryText="Content Strategist/UX Writer" />
                  ]}
              />
              <MenuItem
                  value="Finance"
                  rightIcon={<ArrowDropRight />}
                  primaryText="Finance"
                  menuItems={[
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Accountant" primaryText="Accountant" />,
                    <MenuItem value="Operations and Services" primaryText="Operations and Services" />,
                    <MenuItem value="Auditor" primaryText="Auditor" />,
                    <MenuItem value="Compliance" primaryText="Compliance" />
                  ]}
              />
              <MenuItem
                  value="People"
                  rightIcon={<ArrowDropRight />}
                  primaryText="People"
                  menuItems={[
                    <MenuItem value="Staffing" primaryText="Staffing" />,
                    <MenuItem value="HR Business Partner" primaryText="HR Business Partner" />,
                    <MenuItem value="Learning & Development" primaryText="Learning & Development" />,
                    <MenuItem value="Analyst" primaryText="Analyst" />,
                    <MenuItem value="Straegy & Operations" primaryText="Straegy & Operations" />,
                    <MenuItem value="Administrative Support" primaryText="Administrative Support" />,
                    <MenuItem value="Program Manager" primaryText="Program Manager" />
                  ]}
              />
            </DropDownMenu>
            <DropDownMenu value={this.state.jobLevel} onChange={this.handleLevelChange}>
              <MenuItem value="" primaryText="Level" />
              <MenuItem value="Entry" primaryText="Entry" />
              <MenuItem value="Senior" primaryText="Senior" />
              <MenuItem value="Manager" primaryText="Manager" />
              <MenuItem value="Director" primaryText="Director" />
            </DropDownMenu>
            <DropDownMenu value={this.state.jobYears} onChange={this.handleJobYearChange}>
              <MenuItem value={-1} primaryText="Years" />
              {jobYears}
            </DropDownMenu>
            <p>Education</p>
            <DropDownMenu value={this.state.degree} onChange={this.handleDegreeChange}>
              <MenuItem value="" primaryText="Degree" />
              <MenuItem value="High School" primaryText="High School" />
              <MenuItem value="Bachelor" primaryText="Bachelor" />
              <MenuItem value="Master" primaryText="Master" />
              <MenuItem value="PhD" primaryText="PhD" />
            </DropDownMenu>
            <DropDownMenu value={this.state.school} onChange={this.handleSchoolChange}>
              <MenuItem value="" primaryText="School" />
            </DropDownMenu>
            <DropDownMenu value={this.state.major} onChange={this.handleMajorChange}>
              <MenuItem value="" primaryText="Major" />
            </DropDownMenu>
            <DropDownMenu value={this.state.gradYear} onChange={this.handleGradYearChange}>
              <MenuItem value={0} primaryText="Grad Year" />
              {gradYears}
            </DropDownMenu>
            <p>Interest</p>
            <TextField
                hintText="Let me know more about you here!"
                multiLine
                rowsMax={4}
            />
            <br />
            <br />
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

export default UserInfo;
