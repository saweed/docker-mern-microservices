import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./../../dashboard/Dashboard";
import Login from "./../../auth/Login";
import Register from "./../../auth/Register";
import PrivateRoute from "./PrivateRoute";


const Routess = () => {
  return (
    <>
      <Register />
      <Login />
    </>
    // <Routes>
    //   <Route path="/" exact>
    //     <Register />
    //     <Login />
    //   </Route>
    //   {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
    // </Routes>
  );
};

export default Routess;
