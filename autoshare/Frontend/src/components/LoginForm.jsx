import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { green } from "@material-ui/core/colors";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <div className="form-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                values
              );
              const { token } = response.data;
              // Handle successful login (e.g., save token, redirect)
              console.log("Login successful, token:", token);
            } catch (err) {
              console.error(err);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
              />
              <Field
                name="password"
                as={TextField}
                type="password"
                label="Password"
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                startIcon={isSubmitting && <CircularProgress size={24} style={{color: "#ff5733"}}/>}
                color="secondary"
                fullWidth
                style={{ position: "relative" }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")} // Updated navigation
                variant="outlined"
                color="secondary"
                fullWidth
                style={{ marginTop: "8px" }}
              >
                Back to Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
