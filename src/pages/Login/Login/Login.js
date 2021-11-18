import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    user,
    error,
    isLoading,
    handleGoogleSignIn,
    signInUsingEmailPassword,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      history.push(redirect_uri);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (email, password) => {
    signInUsingEmailPassword(email, password, location, history);
    // .then((result) => {
    //   history.push(redirect_uri);
    // });
  };

  return (
    <div className="container login-form py-3 mt-5 ">
      <h1 className="text-center py-2">Sign In</h1>
      <hr />
      {!isLoading && (
        <div>
          <div className="form d-flex flex-column align-items-center">
            <input
              className="p-2 rounded "
              onBlur={handleEmailChange}
              type="email"
              placeholder="your email"
            />
            <input
              className="p-2 rounded my-2 "
              onBlur={handlePasswordChange}
              type="password"
              placeholder="password"
            />
            {error &&
              ["danger"].map((variant, idx) => (
                <Alert className="w-75 text-center" key={idx} variant={variant}>
                  <i class="far fa-exclamation-circle"></i>
                  {error}
                </Alert>
              ))}
            <button
              type="button"
              className="btn btn-success w-75"
              onClick={() => handleLogin(email, password)}
            >
              Login
            </button>
            <small>Or</small>
            <button
              onClick={googleSignIn}
              type="button"
              className="btn btn-success w-75"
            >
              Sign in with Google
            </button>
          </div>
          <p className="mt-3 text-center">
            New in SwissEagle?
            <Link className="text-danger ps-2" to="/register">
              click here to register
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

export default Login;
