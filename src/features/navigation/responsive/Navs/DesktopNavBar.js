import React from "react";
import {Button, Menu} from "semantic-ui-react";
import DesktopSignedOutMenu from "../Menus/Desktop/DesktopSignedOutMenu";
import {NavLink} from "react-router-dom";


const DesktopNavBar = () => {
  return (
    <Menu className={"desktopMenu"}>
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
        Dives & Dining
      </Menu.Item>


        <Button positive size={'mini'} onClick={() => console.log('Create New Clicked')}>Create New</Button>

        <DesktopSignedOutMenu/>
      {/*{authenticated ? (*/}
      {/*    <DesktopSignedInMenu signOut={signOut} profile={profile} />*/}
      {/*) : (*/}
      {/*    <DesktopSignedOutMenu*/}
      {/*        signIn={signIn}*/}
      {/*        register={register}*/}
      {/*    />*/}
      {/*)}*/}
    </Menu>
  );
};

export default DesktopNavBar;
