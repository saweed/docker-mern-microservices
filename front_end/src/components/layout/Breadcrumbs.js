import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="col-lg-12">
      {/* <!-- breadcrumb--> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            New account / Sign in
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
