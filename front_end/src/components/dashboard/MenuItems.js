import React from 'react'

const MenuItems = () => {
  return (
    <div className="col-lg-3">
        <div className="card sidebar-menu">
          <div className="card-header">
            <h3 className="h4 card-title">Customer section</h3>
          </div>
          <div className="card-body">
            <ul className="nav nav-pills flex-column">
              <a href="customer-account.html" className="nav-link active">
                <i className="fa fa-user"></i> My account
              </a>
              <a href="customer-orders.html" className="nav-link">
                <i className="fa fa-list"></i> My orders
              </a>
              <a href="customer-wishlist.html" className="nav-link">
                <i className="fa fa-heart"></i> My wishlist
              </a>
              <a href="index.html" className="nav-link">
                <i className="fa fa-sign-out"></i> Logout
              </a>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default MenuItems
