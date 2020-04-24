import React, { Fragment } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "../../../../features/navigation/NavBar/NavBar.css";
import TabletSignedOutMenu from "../../Menus/Tablet/TabletSignedOutMenu";

import TabletSignedInMenu from "../../Menus/Tablet/TabletSignedInMenu";

const TabletNavBar = ({
  register,
  signIn,
  signOut,
  authenticated,
  profile
}) => {
  const [visible, setVisible] = React.useState();

  return (
    <Fragment>
      <Menu>
        <Menu.Item
          as={NavLink}
          exact
          to={"/"}
          name={"home"}
          className={"navLogo"}
        >
          <img
            src="/assets/logo/dg_logo.jpg"
            alt="logo"
            className={"navImage"}
          />
        </Menu.Item>

        <Menu.Item
          position={"right"}
          name={"hamburger"}
          onClick={() => {
            setVisible(true);
          }}
        >
          {visible ? (
            <i className="fas fa-times navToggler"></i>
          ) : (
            <i className="fas fa-bars navToggler"></i>
          )}
        </Menu.Item>
      </Menu>

      {/*SIDEBAR*/}
      <Sidebar.Pusher>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item
            as={NavLink}
            exact
            to={"/"}
            name={"home"}
            className={"navLink"}
            onClick={() => setVisible(false)}
          >
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            exact
            to={"/about"}
            name={"about"}
            className={"navLink"}
            onClick={() => setVisible(false)}
          >
            About
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            exact
            to={"/the_board"}
            name={"theBoard"}
            className={"navLink"}
            onClick={() => setVisible(false)}
          >
            The Board
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            exact
            to={"/dive_and_dining"}
            name={"dive_and_dining"}
            className={"navLink"}
            onClick={() => setVisible(false)}
          >
            Listings
          </Menu.Item>

          {authenticated === false && (
            <TabletSignedOutMenu signIn={signIn} register={register} />
          )}
        </Sidebar>

        {authenticated === true && (
          <TabletSignedInMenu
            signOut={signOut}
            profile={profile}
            visible={visible}
          />
        )}
      </Sidebar.Pusher>
    </Fragment>
  );
};

export default TabletNavBar;
