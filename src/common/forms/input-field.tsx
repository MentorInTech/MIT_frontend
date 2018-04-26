import * as React from 'react';

import './input-field.css';

import { InputFieldProps } from '../../../types';

class InputField extends React.Component<InputFieldProps, any> {
  public constructor(props: InputFieldProps) {
    super(props);
    props = {
      disabled: false,
      ...props
    };
  }

  public render() {
    return (
      <div className={`field ${this.props.layoutClassName}`}>
        <input
            className={`input ${this.props.inputClassName}`}
            disabled={this.props.disabled}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            name={this.props.name}
            placeholder={this.props.placeholder}
            type={this.props.type}
        />
        <p className="help is-danger">{this.props.helpMessage}</p>
      </div>
    );
  }
}

export default InputField;
