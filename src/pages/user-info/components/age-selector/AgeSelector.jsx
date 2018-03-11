// @flow

import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import React from 'react';
import Select from 'material-ui/Select';

type Props = {
  onAgeChange: Function,
  required: bool
};

type State = {
  age: string
};

class AgeSelector extends React.Component<Props, State> {
  static defaultProps = {
    required: false
  }

  state = {
    age: ''
  }


  handleChange = (event: Object) => {
    const newState = { [event.target.name]: event.target.value };
    this.setState(newState);
    this.props.onAgeChange(event.target.value);
  }

  render() {
    return (
      <FormControl fullWidth required={this.props.required}>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Select
            fullWidth
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{ name: 'age' }}
        >
          <MenuItem value="Under 21">Under 21</MenuItem>
          <MenuItem value="21 - 25">21 - 25</MenuItem>
          <MenuItem value="26 - 30">26 - 30</MenuItem>
          <MenuItem value="31 - 35">31 - 35</MenuItem>
          <MenuItem value="36 - 40">36 - 40</MenuItem>
          <MenuItem value="41 - 45">41 - 45</MenuItem>
          <MenuItem value="46 - 50">46 - 50</MenuItem>
          <MenuItem value="51 - 55">51 - 55</MenuItem>
          <MenuItem value="56 - 60">56 - 60</MenuItem>
          <MenuItem value="Above 60">Above 60</MenuItem>
        </Select>
      </FormControl>
    );
  }
}


export default AgeSelector;
