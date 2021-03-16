import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { buttonLabel } from '../../constants';

const clientId = process.env.REACT_APP_GOOGLE_ID || '';

function LoginButton() {
  const handleSucces = (response: any) => {
    console.log(response);
  }

  const handleFailure = (error: any) => {
    console.log(error);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={buttonLabel}
        onSuccess={handleSucces}
        onFailure={handleFailure}
        accessType='offline'
      />
    </div>   
  )
}

export default LoginButton;
