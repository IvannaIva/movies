import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../components/styles/App.css";
// import styles from "./EmailPasForm.module.css";
import { useForm } from "react-hook-form";
import { Amplify } from "aws-amplify";
import awsConfig from "../api/aws-exports";
import { signIn } from "../api/auth";
import { loginSuccess } from "../store/loginSlice";

import { styled } from "@mui/system";

const MyTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(3, 214, 161, 1)", // Змінюємо колір рамки
    },
    "&:hover fieldset": {
      borderColor: "rgba(3, 214, 161, 1)", // Колір рамки при наведенні
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(3, 214, 161, 1)", // Колір рамки при фокусі (знімаємо рамку)
    },
  },
});

const formControlStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 0, 0, 1)", // Змінюємо колір рамки
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 0, 0, 1)", // Колір рамки при наведенні
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 0, 0, 1)", // Колір рамки при фокусі (знімаємо рамку)
    },
  },
};

export default function Email() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    <Box>
      {/* <div className="loginForm"> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <MyTextField
          type="email"
          // id="email"
          name="email"
          placeholder="Email"
          innerRef={emailRef}
          {...registerEmail}
          //   className={classes.emailInput}
          id="standard-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Email</InputAdornment>
            ),
          }}
     
        /> */}
        <FormControl
          // sx={{ m: 1, width: "25ch", ...formControlStyle }}
          // variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
             id="email"
            name="email"
            type="email"
            placeholder="Email"
            innerRef={emailRef}
            {...registerEmail}
            // id="standard-start-email"
          />
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "25ch", ...formControlStyle }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="password"
            name="password"
            //type="password"
            placeholder="Password"
            innerRef={passwordRef}
            {...registerPassword}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
      {/* </div> */}
    </Box>
  );
}
