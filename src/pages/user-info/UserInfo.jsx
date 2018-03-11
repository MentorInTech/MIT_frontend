// @flow

/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */

import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import React from 'react';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import './user-info.css';
import AgeSelector from './components/age-selector';
import AutoSuggest from '../../components/auto-suggest';
import GeoSuggest from './components/geo-suggest';
import jobCategories from './job-categories';

type State = {
  age: string,
  city: string,
  degree: string,
  firstName: string,
  gradYear: number,
  interest: string,
  interestErrorText: string,
  jobLevel: string,
  jobTitle: string,
  jobType: string,
  jobYears: number,
  lastName: string,
  major: string,
  school: string
};

class UserInfo extends React.Component<null, State> {
  state = {
    age: 'Under 21',
    city: '',
    degree: '',
    firstName: '',
    gradYear: new Date().getUTCFullYear() - 4,
    interest: '',
    interestErrorText: '',
    jobLevel: '',
    jobTitle: '',
    jobType: 'Internship',
    jobYears: 1,
    lastName: '',
    major: '',
    school: ''
  };

  handleChange = (event: Object) => this.setState({ [event.target.name]: event.target.value });

  submitData = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Card id="user-info">
        <CardHeader
            title="User Information"
            classes={{
              root: 'card-header',
              title: 'card-header-title'
            }}
        />
        <CardContent>
          { /* Begiin Grid wrapper. This is so that the child components
             * can reference a 12-column grid instead of an odd 10-column */ }
          <Grid container justify="center">
            <Grid item xs={10}>

              { /* Begin actual contents */ }
              <form autoComplete="off">
                <Grid container classes={{ typeContainer: 'section-title-first' }} justify="flex-start">
                  <Typography variant="title">About You</Typography>
                </Grid>

                {/* User's full name */}
                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        label="First Name"
                        name="firstName"
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        label="Last Name"
                        name="lastName"
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    />
                  </Grid>
                </Grid>

                {/* User's age */}
                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={12}>
                    <AgeSelector required onAgeChange={age => this.setState({ age })} />
                  </Grid>
                </Grid>

                {/* User's city */}
                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={12}>
                    <GeoSuggest required onCityChange={city => this.setState({ city })} />
                  </Grid>
                </Grid>

                {/* User's current job information */}
                <Grid container classes={{ typeContainer: 'section-title' }} justify="flex-start">
                  <Typography variant="title">Your Current Job</Typography>
                </Grid>

                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={7}>
                    <AutoSuggest
                        required
                        dataSource={jobCategories}
                        label="Job Title"
                        minCharacters="0"
                        onChange={(event, index, value) => this.setState({ jobTitle: value })}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="jobLevel">Level</InputLabel>
                      <Select
                          fullWidth
                          inputProps={{ name: 'jobLevel' }}
                          onChange={this.handleChange}
                          value={this.state.jobLevel}
                      >
                        <MenuItem value="Entry">Entry</MenuItem>
                        <MenuItem value="Senior">Senior</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                        <MenuItem value="Director">Director</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                        fullWidth
                        required
                        label="Years"
                        name="jobYears"
                        onChange={this.handleChange}
                        value={this.state.jobYears}
                    />
                  </Grid>
                </Grid>

                <Grid container classes={{ typeContainer: 'job-type' }} justify="center">
                  <Grid item xs={12}>
                    <FormControl component="fieldset" required>
                      <FormLabel component="label">Job Type</FormLabel>
                      <RadioGroup
                          row
                          aria-label="job-type"
                          name="jobType"
                          onChange={this.handleChange}
                          value={this.state.jobType}
                      >
                        <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
                        <FormControlLabel value="Contractor" control={<Radio />} label="Contractor" />
                        <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* User's education information */}
                <Grid container classes={{ typeContainer: 'section-title' }} justify="flex-start">
                  <Typography variant="title">Education</Typography>
                </Grid>

                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={4}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="degree">Degree</InputLabel>
                      <Select
                          fullWidth
                          inputProps={{ name: 'degree' }}
                          onChange={this.handleChange}
                          value={this.state.degree}
                      >
                        <MenuItem value="High School">High School</MenuItem>
                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                        <MenuItem value="Master">Master</MenuItem>
                        <MenuItem value="PhD">PhD</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                        fullWidth
                        required
                        label="Major"
                        name="major"
                        onChange={this.handleChange}
                        value={this.state.major}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                        fullWidth
                        required
                        label="School"
                        name="school"
                        onChange={this.handleChange}
                        value={this.state.school}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                        fullWidth
                        required
                        label="Grad Year"
                        name="gradYear"
                        onChange={this.handleChange}
                        value={this.state.gradYear}
                    />
                  </Grid>
                </Grid>

                {/* User's special interests */}
                <Grid container classes={{ typeContainer: 'section-title' }} justify="flex-start">
                  <Typography variant="title">Others</Typography>
                </Grid>

                <Grid container classes={{ typeContainer: 'container' }} justify="center">
                  <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        required
                        label="Tell us about yourself"
                        name="interest"
                        onChange={this.handleChange}
                        value={this.state.interest}
                        rowsMax="5"
                    />
                  </Grid>
                </Grid>

                <Grid container classes={{ typeContainer: 'button-container' }} justify="center">
                  <Grid item xs={4}>
                    <Button variant="raised" color="primary" name="me" onClick={this.submitData}>
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </form>
              { /* End actual contents */ }

            </Grid>
          </Grid>
          { /* End Grid wrapper */ }
        </CardContent>
      </Card>
    );
  }
}

export default UserInfo;
