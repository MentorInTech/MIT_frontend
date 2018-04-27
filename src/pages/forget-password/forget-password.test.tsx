import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ForgetPassword from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForgetPassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});
