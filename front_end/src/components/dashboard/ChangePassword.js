import React from 'react'

const ChangePassword = () => {
  return (
    <>
      <h3 className="mt-4">Change password</h3>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password_old">Old password</label>
                  <input
                    id="password_old"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password_1">New password</label>
                  <input
                    id="password_1"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password_2">Retype new password</label>
                  <input
                    id="password_2"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            {/* <!-- /.row--> */}
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-save"></i> Save new password
              </button>
            </div>
          </form>
    </>
  )
}

export default ChangePassword
