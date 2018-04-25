import * as React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

import { PageProps } from '../../../types';

import './page.css';

class Page extends React.Component<PageProps, any> {
  constructor(props: PageProps) {
    super(props);
    document.title = `${props.title} | Mentor In Tech`;
  }

  public render() {
    return (
      <div id="page">
        <div id="content-wrapper">
          <Navbar />

          {/* page contents */}
          <section className="section">
            {this.props.children}
          </section>
          {/* end of page contents */}

        </div>

        <Footer />
      </div>
    );
  }
}

export default Page;
