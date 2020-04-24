import React, { Component, Fragment } from "react";
import { Responsive } from "semantic-ui-react";
import DesktopNavBar from "../responsive/Navs/DesktopNavBar";
import MobileNavBar from "../responsive/Navs/MobileNavBar";

import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        {/*MOBILE*/}
        <Responsive {...Responsive.onlyMobile}>
          <MobileNavBar />
        </Responsive>

          <Responsive {...Responsive.onlyTablet}>
              <MobileNavBar />
          </Responsive>
        {/*/!*TABLET*!/*/}
        {/*<Responsive {...Responsive.onlyTablet}>*/}
        {/*    <TabletNavBar authenticated={authenticated} profile={profile} register={this.handleRegister} signIn={this.handleSignIn} signOut={this.handleSignOut}/>*/}
        {/*</Responsive>*/}

        {/*DESKTOP*/}
        <Responsive {...Responsive.onlyComputer}>
          <DesktopNavBar />
        </Responsive>
      </Fragment>
    );
  }
}

export default NavBar;
