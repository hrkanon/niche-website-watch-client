import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Alert, Spinner } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUpWithEmailPassword, error, isLoading } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (name, email, password) => {
    signUpWithEmailPassword(name, email, password);
  };

  return (
    <div className="container login-form py-3 mt-5">
      <h2 className="text-center py-2">Please Register</h2>
      <hr />
      {!isLoading && (
        <div className="form d-flex flex-column align-items-center">
          <input
            onBlur={handleNameChange}
            type="text"
            className="p-2 rounded "
            placeholder="Your Name"
            required
          />
          <input
            onBlur={handleEmailChange}
            type="email"
            className="p-2 rounded my-2"
            placeholder="your email"
            required
          />
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="p-2 rounded "
            placeholder="password"
            required
          />
          <br />
          {error &&
            ["danger"].map((variant, idx) => (
              <Alert className="w-75 text-center" key={idx} variant={variant}>
                <i class="far fa-exclamation-circle"></i>
                {error}
              </Alert>
            ))}
          <button
            className="btn btn-success mb-3 w-75"
            onClick={() => handleRegister(name, email, password)}
          >
            Register
          </button>
          <p>
            Already have an Account?
            <Link className="text-danger ps-2 " to="/login">
              click here to login
            </Link>
          </p>
        </div>
      )}
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {user?.email &&
        ["success"].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            <i class="fas fa-check-circle me-2"></i>User created successfully!
          </Alert>
        ))}
    </div>
  );
};

export default Register;
