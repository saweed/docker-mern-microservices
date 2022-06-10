import React from "react";
//import PropTypes from "prop-types";
import MenuItems from "./MenuItems";
import Header from "./Header";
import ChangePassword from "./ChangePassword";
import PersonalDetails from "./PersonalDetails";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({user}) => {
  return (
    <>
    <MenuItems />

      <div className="col-lg-9">
        <div className="box">
          <Header avatar={user.avatar} />
          <ChangePassword />
          <PersonalDetails />
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(Dashboard);
