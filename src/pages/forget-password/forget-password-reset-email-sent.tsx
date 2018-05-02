import * as React from 'react';

import './forget-password.css';
import PageFrameSingleForm from '../../common/page-frames/single-form';
import strings from '../../strings';

class ForgetPasswordResetEmailSent extends React.Component {
  public render() {
    return (
      <PageFrameSingleForm
          formTitle="Instructions have been sent"
          title={strings.texts.FORGET_PASSWORD}
      >
        <p>Instructions to reset your password have been sent to you.</p>
        <p>Please check your email.</p>
      </PageFrameSingleForm>
    );
  }
}

export default ForgetPasswordResetEmailSent;
