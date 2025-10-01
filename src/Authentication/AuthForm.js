import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export function AuthForm() {
    const{userName, setUserName, passwords, setPasswords, login} = useContext(AuthContext)
    console.log('authenticatePage',login)
  const [isLogin, setIsLogin] = useState(true);


  const handleSubmit = async (e) => {
   e.preventDefault()

  };


  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        <h2>Login Form</h2>
        <TextField
          type="email"
          name="email"
          label="Email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
          margin="normal"
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            style: { color: "white" }, // text color
          }}
          InputLabelProps={{
            style: { color: "white" }, // label color
          }}
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          value={passwords}
          onChange={(e) => setPasswords(e.target.value)}
          // onBlur={formik.handleBlur}
          fullWidth
          margin="normal"
          // error={
          //   formik.touched.password && Boolean(formik.errors.password)
          // }
          // helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            style: { color: "white" }, // text color
          }}
          InputLabelProps={{
            style: { color: "white" }, // label color
          }}
        />
        <div className="forgot-password">
          <a href="/">Forgot password?</a>
        </div>
        <div className="form-content">
          {/* <button className="submit-btn" onClick={login}>Login</button> */}
          <button
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault(); // prevent form reload
              login(); // call login function
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
