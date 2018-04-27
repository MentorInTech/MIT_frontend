import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ResetPassword from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetPassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});
