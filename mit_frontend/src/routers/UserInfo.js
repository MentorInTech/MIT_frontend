import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RadioButton from 'material-ui/RadioButton';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import '../App.css'; 
import styles from './styles';
import AutoComplete from 'material-ui/AutoComplete';
import Geosuggest from 'react-geosuggest';
import SelectField from 'material-ui/SelectField';
import ReactDOM from 'react-dom';

/* Need this to circumvent ESlint when using Google API */
/*global google*/

/* Initiate Job Year */
const jobYear = [];
for (let i = 1; i < 100; i++ ) {
  jobYear.push(<MenuItem value={i} key={i} primaryText={i} />);
}

/* Initiate Grad Year */
const thisYear = new Date().getFullYear();
const gradYears = [];
for (let i = thisYear; i >= 1900; i--) {
  gradYears.push(<MenuItem value={i} key={i} primaryText={i} />);
}

// Initiate jobCategories 
const jobCategories = ["Software Engineer", "Product Manager", "Sales Engineer", "Electrical Engineer", "Sourcing/Supply Chain", "Mechanical Engineer", "Manufacturing Engineer", "Industrial Designer", "Data Scientist", "Marketing", "Public Relations", "Analyst", "Communications", "Event Planner", "Analyst", "Strategy & Operations", "Program Manager", "Account Manager", "Business Partnerships", "New Business Sales", "Solutions Consultant", "Trainer/Instructional Designer", "Technical Solutions Engineer", "UX Engineer", "Visual Designer", "Motion Designer", "Interaction Designer", "UX Researcher", "Content Strategist/UX Writer", "Accountant", "Operations and Services", "Auditor", "Compliance", "Staffing", "HR Business Partner", "Learning & Development", "Administrative Support"       
];

class UserInfo extends Component {
  constructor(props) {
    super(props);
    /*
     * this.state is a react p, 
     */
    this.state = {
      firstName: "",
      lastName: "",
      age: "Under 22",
      city: "",
      jobRole: "Internship",
      jobCategory: "",
      jobLevel: "",
      jobYears: 0,
      degree: "",
      school: "",
      major: "",
      gradYear: 0,
      interest: "",
      firstNameErrorText:"",
      lastNameErrorText:"",
      interestErrorText:""
    };
  }

  handleAgeChange = (event, index, value) => this.setState({age: value});
  handleCityChange = (event, index, value) => this.setState({city: value});
  handleJobYearChange = (event, index, value) => this.setState({jobYears: value});
  setCategoryChange(categoryChange) {
      this.setState({input: categoryChange})
  }
  handleLevelChange = (event, index, value) => this.setState({jobLevel: value});
  handleDegreeChange = (event, index, value) => this.setState({degree: value});
  handleGradYearChange = (event, index, value) => this.setState({gradYear: value});
  setJobRole = (jobRole) => {
    this.setState({ jobRole });
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
   * This function is required for each react component. Render function returns
   * UI components and render them in browser.
   * @param {null}
   * @return {null}
   */
  render() {

    var fixtures = [
      {label: 'San Jose, CA', location: {lat: 37.3382, lng: 121.8863}}
    ];

    return (
      <div className="App">
        <p className="title">Mentor In Tech</p>
        <MuiThemeProvider>
          <Card className="user-info-card">
            <CardTitle title="User Information" titleColor="#ffffff" className="card-title"></CardTitle>
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
              // required
              hintText="First Name"
              floatingLabelText="First Name"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.firstName}
              minLength="2"
              maxLength="15"
              onChange={
                (event) => {this.setState({lastName: event.target.value})}
              }

            />
            <TextField
              required
              hintText="Last Name"
              floatingLabelText="Last Name"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.lastName}
              minLength="2"
              maxLength="15"
              onChange={
                (event) => {this.setState({lastName: event.target.value})}
              }
            />
            <p>Age</p>
            <DropDownMenu value={this.state.age} onChange={this.handleAgeChange}>
              <MenuItem value={"Under 22"} primaryText="Under 22" />
              <MenuItem value={"22 - 25"} primaryText="22 - 25" />
              <MenuItem value={"26 - 30"} primaryText="26 - 30" />
              <MenuItem value={"31 - 35"} primaryText="31 - 35" />
              <MenuItem value={"36 - 40"} primaryText="36 - 40" />
              <MenuItem value={"41 - 45"} primaryText="41 - 45" />
              <MenuItem value={"46 - 50"} primaryText="46 - 50" />
              <MenuItem value={"51 - 55"} primaryText="51 - 55" />
              <MenuItem value={"56 - 60"} primaryText="56 - 60" />
              <MenuItem value={"Above 60"} primaryText="Above 60" />
            </DropDownMenu>
            <p>City</p>
            <div>
              <Geosuggest
                ref={el=>this._geoSuggest=el}
                placeholder="Start typing!"
                initialValue=""
                fixtures={fixtures}
                onSuggestSelect={this.onSuggestSelect}
                location={new google.maps.LatLng(37.3382, 121.8863)}
                radius="20" />

              <button onClick={()=>this._geoSuggest.focus()}>Focus</button>
              <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
              <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
            </div>

            <p>Job</p>
            <br />
            <RadioButton
              label="Internship"
              onClick={this.setJobRole.bind(this, "Internship")}
              checked={this.state.jobRole === "Internship"}
            />
            <RadioButton
              label="Contractor"
              onClick={this.setJobRole.bind(this, "Contractor")}
              checked={this.state.jobRole === "Contractor"}
            />
            <RadioButton
              label="Full-time"
              onClick={this.setJobRole.bind(this, "Full-time")}
              checked={this.state.jobRole === "Full-time"}
            />

            <p>Job Category</p>
            <AutoComplete
              floatingLabelText="Type to search"
              filter={AutoComplete.fuzzyFilter}
              onUpdateInput={this.setCategoryChange.bind(this)}
              searchText={this.state.input}
              dataSource={jobCategories}
              maxSearchResults={5}
            />
            <br />

            <DropDownMenu value={this.state.jobLevel} onChange={this.handleLevelChange}>
              <MenuItem value={""} primaryText="Proficiency Level" />
              <MenuItem value={"Entry"} primaryText="Entry" />
              <MenuItem value={"Senior"} primaryText="Senior" />
              <MenuItem value={"Manager"} primaryText="Manager" />
              <MenuItem value={"Director"} primaryText="Director" />
            </DropDownMenu>
            <DropDownMenu maxHeight={300} value={this.state.jobYears} onChange={this.handleJobYearChange}>
            <MenuItem value={0} primaryText="Years of Experience" />
            {jobYear}
            </DropDownMenu>

            <p>Education</p>
            <DropDownMenu value={this.state.degree} onChange={this.handleDegreeChange}>
              <MenuItem value={""} primaryText="Degree" />
              <MenuItem value={"High School"} primaryText="High School" />
              <MenuItem value={"Bachelor"} primaryText="Bachelor" />
              <MenuItem value={"Master"} primaryText="Master" />
              <MenuItem value={"PhD"} primaryText="PhD" />
            </DropDownMenu>
            <br />

            <TextField
              required
              hintText="School"
              floatingLabelText="School"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.school}
              onChange={
                (event) => {this.setState({school: event.target.value})}
              }
            />
            <br />

            <TextField
              required
              hintText="Major"
              floatingLabelText="Major"
              floatingLabelFocusStyle={styles.textField.text}
              underlineFocusStyle={styles.textField.underline}
              value={this.state.major}
              onChange={
                (event) => {this.setState({major: event.target.value})}
              }
            />
            <br />

            <DropDownMenu value={this.state.gradYear} onChange={this.handleGradYearChange}>
              <MenuItem value={0} primaryText="Grad Year" />
              {gradYears}
            </DropDownMenu>

            <p>Interest</p>
            <TextField
              hintText="Let me know more about you here!"
              multiLine={true}
              rowsMax={4}
              value={this.state.interest}
              minLength="3"
              maxLength="100"
              onChange={
                (event) => {this.setState({interest: event.target.value})}
              }
            />
            <br/>
            <br/>
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
    onSuggestSelect(suggest) {
      if(suggest !== undefined) {
        console.log(suggest.description);
      } else {
        console.log('No location input');
      }
  }
}




export default UserInfo;