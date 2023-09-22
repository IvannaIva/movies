import React from "react";
import EmailPasForm from "../components/EmailPasForm";
import Email from "../components/Email";


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
