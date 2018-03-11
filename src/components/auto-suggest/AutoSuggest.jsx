// @flow

import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import Autosuggest from 'react-autosuggest';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';

import { getSuggestions, getSuggestionValue } from './auto-suggest';

const styles = () => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 99,
    marginTop: 0,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
});

function renderInput(inputProps) {
  const {
    classes,
    label,
    placeholder,
    ref,
    ...other
  } = inputProps;

  // Chrome doesn't respect `autoComplete="off"`; using a random text will disable it.
  // See: https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
  other.autoComplete = 'new-password';
  return (
    <TextField
        fullWidth
        label={label}
        inputRef={ref}
        placeholder={placeholder}
        InputProps={{
          classes: {
            input: classes.input
          },
          ...other
        }}
    />
  );
}

function renderSuggestion(suggestion: Object) {
  return (
    <MenuItem component="div">
      <div>{suggestion.label}</div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

type Props = {
  classes: Object,
  dataSource: any,
  label: string,
  minCharacters: number,
  onChange: Function,
  placeholder: string
};

type State = {
  value: string,
  suggestions: any[]
};

class AutoSuggest extends React.Component<Props, State> {
  static defaultProps = {
    classes: {},
    minCharacters: 3
  }

  state = {
    value: '',
    suggestions: []
  };

  handleSuggestionsFetchRequested = (data: Object) => {
    if (data.value.length < this.props.minCharacters) {
      return;
    }

    const suggestionsData = (typeof this.props.dataSource === 'function')
      ? this.props.dataSource(data.value)
      : this.props.dataSource;

    // If suggestionData is a promise, extract the data
    if (typeof suggestionsData.then === 'function') {
      suggestionsData.then(suggestions => this.setState({ suggestions }));
    } else {
      this.setState({
        suggestions: getSuggestions(suggestionsData, data.value)
      });
    }
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event: Object, data: Object) => {
    this.setState({
      value: data.newValue
    });

    if (this.props.onChange) {
      this.props.onChange(event, null, data.newValue);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            label: this.props.label,
            placeholder: this.props.placeholder,
            classes,
            value: this.state.value,
            onChange: this.handleChange
          }}
      />
    );
  }
}


export default withStyles(styles)(AutoSuggest);
