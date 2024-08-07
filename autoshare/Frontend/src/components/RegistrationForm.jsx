import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import
import "./RegistrationForm.css";

function RegistrationForm() {
  const navigate = useNavigate(); // Updated hook

  return (
    <div className="register-form">
      <h1>Registration Form</h1>
      <div className="form-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await axios.post(
                "http://localhost:5000/api/auth/register",
                values
              );
              navigate("/login"); // Updated navigation
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
                color="primary"
                fullWidth
                startIcon={isSubmitting && <CircularProgress size={24} />}
                style={{ position: "relative" }}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
              <Button
                onClick={() => navigate("/login")} // Updated navigation
                variant="outlined"
                color="secondary"
                fullWidth
                style={{ marginTop: "8px" }}
              >
                Already registered? Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;
