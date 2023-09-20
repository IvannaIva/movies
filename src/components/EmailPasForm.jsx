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
import styles from "./EmailPasForm.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../components/styles/App.css";
import { useForm } from "react-hook-form";
import { Amplify } from "aws-amplify";
import awsConfig from "../api/aws-exports";
import { signIn } from "../api/auth";
import { loginSuccess } from "../store/loginSlice";

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
  const [showPassword, setShowPassword] = useState(false);
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

  return (
    <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.email_pas_form}>
        <h2>Welcome back</h2>
    
          <FormControl sx={{ marginBottom: 3 }}>
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
              sx={{
                "& input": {
                  width: "300px",
                  color: "lightgray",
              
                },
                
              }}
            />
            <div className={styles.error_wrong}>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </FormControl>

          <FormControl sx={{ ...formControlStyle }}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters",
                },
              })}
              sx={{
                "& input": {
                  width: "250px",
                  color: "lightgray",
                  // Інші ваши стилі
                },
              }}
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

            <div className={styles.error_wrong}>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </FormControl>
          <div className={styles.error_wrong}>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <div className={styles.forgotPas}>
            {/* <span onClick={handleForgotPassword}>Forgot Password</span> */}
            <span>Forgot Password</span>
          </div>
          <p>
          Not registered yet? <span>Sign up</span>
          </p>
          <Button type="submit" className={styles.customButton}>
            <span>Login</span>
          </Button>
       
      </div>
      </form>
    </Box>
  );
}
