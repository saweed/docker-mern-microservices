import React from "react";

const Copyrights = () => {
  return (
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-center text-lg-left">
              ©2019 Your name goes here.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-center text-lg-right">
              Template design by{" "}
              <a href="https://bootstrapious.com/" rel="noreferrer" target="_blank">Bootstrapious</a>
              {/* <!-- If you want to remove this backlink, pls purchase an Attribution-free License @ https://bootstrapious.com/p/obaju-e-commerce-template. Big thanks!--> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyrights;
