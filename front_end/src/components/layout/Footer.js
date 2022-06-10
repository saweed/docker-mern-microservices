import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Pages</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="text.html">About us</Link>
              </li>
              <li>
                <Link to="text.html">Terms and conditions</Link>
              </li>
              <li>
                <Link to="faq.html">FAQ</Link>
              </li>
              <li>
                <Link to="contact.html">Contact us</Link>
              </li>
            </ul>
            <hr />
            <h4 className="mb-3">User section</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="#" data-toggle="modal" data-target="#login-modal">
                  Login
                </Link>
              </li>
              <li>
                <Link to="register.html">Regiter</Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.col-lg-3--> */}
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Top categories</h4>
            <h5>Men</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="category.html">T-shirts</Link>
              </li>
              <li>
                <Link to="category.html">Shirts</Link>
              </li>
              <li>
                <Link to="category.html">Accessories</Link>
              </li>
            </ul>
            <h5>Ladies</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="category.html">T-shirts</Link>
              </li>
              <li>
                <Link to="category.html">Skirts</Link>
              </li>
              <li>
                <Link to="category.html">Pants</Link>
              </li>
              <li>
                <Link to="category.html">Accessories</Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.col-lg-3--> */}
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Where to find us</h4>
            <p>
              <strong>Obaju Ltd.</strong>
              <br />
              13/25 New Avenue
              <br />
              New Heaven
              <br />
              45Y 73J
              <br />
              England
              <br />
              <strong>Great Britain</strong>
            </p>
            <Link to="contact.html">Go to contact page</Link>
            <hr className="d-block d-md-none" />
          </div>
          {/* <!-- /.col-lg-3--> */}
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Get the news</h4>
            <p className="text-muted">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <form>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-append">
                  <button type="button" className="btn btn-outline-secondary">
                    Subscribe!
                  </button>
                </span>
              </div>
              {/* <!-- /input-group--> */}
            </form>
            <hr />
            <h4 className="mb-3">Stay in touch</h4>
            <p className="social">
              <Link to="#" className="facebook external">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="#" className="twitter external">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="#" className="instagram external">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="#" className="gplus external">
                <i className="fa fa-google-plus"></i>
              </Link>
              <Link to="#" className="email external">
                <i className="fa fa-envelope"></i>
              </Link>
            </p>
          </div>
          {/* <!-- /.col-lg-3--> */}
        </div>
        {/* <!-- /.row--> */}
      </div>
      {/* <!-- /.container--> */}
    </div>
  );
};

export default Footer;
