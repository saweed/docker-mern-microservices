import React from "react";
import Alert from "./Alert";
import Breadcrumbs from "./Breadcrumbs";
import Routess from "./routing/Routes";

const Container = () => {
  return (
    <div id="all">
      <div id="content">
        <div className="container">
          <div className="row">
            <Breadcrumbs />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Alert />
            </div>
          </div>
          <div className="row">
            <Routess />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
