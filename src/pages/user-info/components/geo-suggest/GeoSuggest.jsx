// @flow

import React from 'react';

import AutoSuggest from '../../../../components/auto-suggest';
import GoogleMaps from './google-maps';

type Props = {
  onCityChange: Function,
};

type State = {
  city: string
};

class GeoSuggest extends React.Component<Props, State> {
  static defaultProps = {
    required: false,
    count: 5,
    googleMaps: undefined
  };

  handleChange = (event: Object, index: number, value: string) => {
    const newState = { city: value };
    this.setState(newState);
    this.props.onCityChange(value);
  };

  render() {
    return (
      <AutoSuggest
          fullWidth
          required
          classes={{}}
          dataSource={GoogleMaps.getCityPrediction}
          label="City"
          onChange={this.handleChange}
      />
    );
  }
}


export default GeoSuggest;
