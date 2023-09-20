import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Amplify } from "aws-amplify";
import awsConfig from "../api/aws-exports";

import { signIn } from "../api/auth";
import { loginSuccess } from "../store/loginSlice";


export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    Amplify.configure(awsConfig);
  }, []);

  const onSubmit = async (data) => {
    console.log("data", data);

    const loginResponse = await signIn(data.email, data.password);
    if (loginResponse.isSuccess) {
      dispatch(loginSuccess());
      navigate("/");
   
      
      console.log("Login successful");
    } else {
      const { error } = loginResponse;
      console.log("Login error:", error);
        if (error.code === "LimitExceededException") {
        setErrorMessage("Attempt limit exceeded, please try again later.");
      } else {
        setErrorMessage(error.message || "An error occurred during login");
      }
    }
  };

  const { ref: emailRef, ...registerEmail } = register("email", {
    required: "Email is required",
  });
  const { ref: passwordRef, ...registerPassword } = register("password", {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "Minimum 5 characters",
    },
  });

  return (
    <div className={styles.email_pas_form}>
      <h2>Welcome back</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            innerRef={emailRef}
            {...registerEmail}
            // value={email}
          />
          <div className={styles.error_wrong}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            innerRef={passwordRef}
            {...registerPassword}
          />
          <div className={styles.error_wrong}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </FormGroup>{" "}
        <div className={styles.error_wrong}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className={styles.forgotPas}>
          {/* <span onClick={handleForgotPassword}>Forgot Password</span> */}
          <span>Forgot Password</span>
        </div>
        <Button className={styles.customButton}>Login</Button>
      </Form>
      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Signup</span>
      </p>
    </div>
  );
}
