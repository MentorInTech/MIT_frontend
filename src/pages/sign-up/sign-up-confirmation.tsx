import * as React from 'react';

import './sign-up.css';
import PageFrameSingleForm from '../../common/page-frames/single-form';
import strings from '../../strings';

class SignUpConfirmation extends React.Component {
  public render() {
    return (
      <PageFrameSingleForm
          formTitle={strings.texts.VERIFY_EMAIL}
          title={strings.texts.CREATE_NEW_ACCOUNT}
      >
        <div id="verify-instructions">
          {strings.texts.VERIFY_INSTRUCTIONS}
        </div>
      </PageFrameSingleForm>
    );
  }
}

export default SignUpConfirmation;
