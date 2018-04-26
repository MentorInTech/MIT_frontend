import * as React from 'react';

import PageFrame from '../../common/page-frame';

import './landing.css';

class Landing extends React.Component {
  public render() {
    return (
      <PageFrame title="Create new account">
        <div className="container">
          Welcome!
        </div>
      </PageFrame>
    );
  }
}

export default Landing;
