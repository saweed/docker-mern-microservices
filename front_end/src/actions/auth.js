import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../helpers/defaultHeaders";

export const loadUser = () => async dispatch => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    const response = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("/api/v1/user/signup/", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (error) {
      console.error(error);
      if (error.response.status === 500) {
        dispatch(setAlert(error.response.statusText, "danger"));
      }
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };


// Login user
export const login =
  (email, password) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name:email, password });
    console.log(body);
    try {
      const res = await axios.post("/api/v1/user/login", body, config);
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: res.data,
      // });

      // dispatch(loadUser());
    } catch (error) {
      if (error.response.status === 500) {
        dispatch(setAlert(error.response.statusText, "danger"));
      }
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };


  // Logout

  export const logout = () => dispatch => {
      dispatch({
          type: LOGOUT
      });
  }