import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "./../../actions/auth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if(isAuthenticated){
    return <Navigate to="/dashboard" />
  }
  return (
    <div className="col-lg-6">
      <div className="box">
        <h1>Login</h1>
        <p className="lead">Already our customer?</p>
        <p className="text-muted">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <hr />
        <form method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-sign-in"></i> Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
