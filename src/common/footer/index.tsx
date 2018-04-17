import * as React from 'react';

import './footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              &copy; 2018 Mentor In Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
