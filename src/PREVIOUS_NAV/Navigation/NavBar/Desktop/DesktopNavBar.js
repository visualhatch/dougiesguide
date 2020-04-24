import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "../NavBar.css";
import DesktopSignedInMenu from "../../Menus/Desktop/DesktopSignedInMenu";
import DesktopSignedOutMenu from "../../Menus/Desktop/DesktopSignedOutMenu";

const DesktopNavBar = ({ register, signIn, signOut, authenticated, profile }) => {
  return (
    <Menu className={'desktopMenu'}>
      <Menu.Item
        as={NavLink}
        exact
        to={"/"}
        name={"home"}
        className={"navLogo"}
      >
        <img src="/assets/logo/dg_logo.jpg" alt="logo" className={"navImage"} />
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={"/"}
        name={"home"}
        className={"navLink"}
      >
        Home
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={"/about"}
        name={"about"}
        className={"navLink"}
      >
        About
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={"/the_board"}
        name={"theBoard"}
        className={"navLink"}
      >
        The Board
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        exact
        to={"/listings"}
        name={"listings"}
        className={"navLink"}
      >
        Listings
      </Menu.Item>

      {authenticated ? (
        <DesktopSignedInMenu signOut={signOut} profile={profile} />
      ) : (
        <DesktopSignedOutMenu
          signIn={signIn}
          register={register}
        />
      )}
    </Menu>
  );
};

export default DesktopNavBar;
