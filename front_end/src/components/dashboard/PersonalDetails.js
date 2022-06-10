import React from 'react'

const PersonalDetails = () => {
  return (
    <>
      <h3 className="mt-5">Personal details</h3>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firstname</label>
                  <input id="firstname" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <input id="lastname" type="text" className="form-control" />
                </div>
              </div>
            </div>
            {/* <!-- /.row--> */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" className="form-control" />
                </div>
              </div>
            </div>
            {/* <!-- /.row--> */}
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label htmlFor="city">Company</label>
                  <input id="city" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label htmlFor="zip">ZIP</label>
                  <input id="zip" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select id="state" className="form-control"></select>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select id="country" className="form-control"></select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Telephone</label>
                  <input id="phone" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-save"></i> Save changes
                </button>
              </div>
            </div>
          </form>
    </>
  )
}

export default PersonalDetails
