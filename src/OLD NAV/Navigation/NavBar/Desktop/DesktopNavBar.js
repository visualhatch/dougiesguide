import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "../../../../features/navigation/NavBar/NavBar.css";
import DesktopSignedInMenu from "../../../../features/navigation/responsive/Menus/Desktop/DesktopSignedInMenu";
import DesktopSignedOutMenu from "../../../../features/navigation/responsive/Menus/Desktop/DesktopSignedOutMenu";

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
        to={"/dive_and_dining"}
        name={"dive_and_dining"}
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
