import React from 'react'
import Avatar from '../layout/Avatar';

const Header = ({avatar}) => {
  return (
    <>
      <h1>My account</h1>
      <div className="row">
        <div className="col-lg-7">
          <p className="lead">
            Change your personal details or your password here.
          </p>
          <p className="text-muted">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          </div>
      <div className="col-lg-3">
        <Avatar avatar={avatar} />
    </div>
    </div>
    </>
  )
}

export default Header
