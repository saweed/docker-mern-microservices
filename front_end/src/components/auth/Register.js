import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "./../../actions/alert";
import { register } from "./../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  var [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
        setAlert("Password not match.", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if(isAuthenticated){
    return <Navigate to="/dashboard" />
  }
  return (
    <div className="col-lg-6">
      <div className="box">
        <h1>New account</h1>
        <p className="lead">Not our registered customer yet?</p>
        <p>
          With registration with us new world of fashion, fantastic discounts
          and much more opens to you! The whole process will not take you more
          than a minute!
        </p>
        <p className="text-muted">
          If you have any questions, please feel free to{" "}
          <Link to="contact.html">contact us</Link>, our customer service center
          is working for you 24/7.
        </p>
        <hr />
        <form method="post" onSubmit={onSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={onChange}
              value={name}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              onChange={onChange}
              value={email}
              autoComplete="off"
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
              value={password}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              id="password2"
              name="password2"
              type="password"
              className="form-control"
              onChange={onChange}
              value={password2}
              autoComplete="off"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-user-md"></i> Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(Register);
