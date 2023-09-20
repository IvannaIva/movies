import React from "react";
import EmailPasForm from "../components/EmailPasForm";
import Email from "../components/Email";
// import { Authenticator, SignIn, SignUp } from 'aws-amplify';

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="titleLoginPage"><h1>MaxMovie</h1></div>
      <EmailPasForm />
      {/* <Email/> */}
    </div>
  );
}

export default LoginPage;
