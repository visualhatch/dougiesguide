import React, {Component, Fragment} from "react";
import {Responsive} from "semantic-ui-react";


import { withRouter } from "react-router";
import { withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { openModal } from "../../../store/actions/modalActions";
import MobileNavBar from "./Mobile/MobileNavBar";
import DesktopNavBar from "./Desktop/DesktopNavBar";
import TabletNavBar from "./Tablet/TabletNavBar";

const actions = {
  openModal
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
      this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;


    return (

        <Fragment>
          {/*MOBILE*/}
          <Responsive {...Responsive.onlyMobile}>
            <MobileNavBar authenticated={authenticated} profile={profile} register={this.handleRegister} signIn={this.handleSignIn} signOut={this.handleSignOut}/>
          </Responsive>

          {/*TABLET*/}
          <Responsive {...Responsive.onlyTablet}>
            <TabletNavBar authenticated={authenticated} profile={profile} register={this.handleRegister} signIn={this.handleSignIn} signOut={this.handleSignOut}/>
          </Responsive>

          {/*DESKTOP*/}
          <Responsive {...Responsive.onlyComputer}>
            <DesktopNavBar authenticated={authenticated} profile={profile} register={this.handleRegister} signIn={this.handleSignIn} signOut={this.handleSignOut}/>
          </Responsive>


        </Fragment>


    );
  }
}

export default withRouter(
  withFirebase(connect(mapStateToProps, actions)(NavBar))
);
