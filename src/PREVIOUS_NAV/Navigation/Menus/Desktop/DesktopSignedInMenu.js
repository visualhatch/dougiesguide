import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DesktopSignedInMenu = ({ signOut, profile }) => {
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={profile.photoURL || "/assets/avatar/user.png"}
      />
      <Dropdown pointing="top right" text={profile.displayName}>
        <Dropdown.Menu className={"dropdownMenu"}>
          <Dropdown.Item
            as={Link}
            to={"/add_a_dive"}
            text={"Add A Dive"}
            icon={"plus"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_favourites"}
            text={"My Favourites"}
            icon={"like"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_dives"}
            text={"My Dives"}
            icon={"favorite"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_checkins"}
            text={"Checkins"}
            icon={"checkmark"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_messages"}
            text={"Messages"}
            icon={"mail"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_profile"}
            text={"Profile"}
            icon={"user"}
          />
          <Dropdown.Item
            as={Link}
            to={"/my_settings"}
            text={"Settings"}
            icon={"setting"}
          />

          <Dropdown.Item text="Sign Out" icon="log out" onClick={signOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default DesktopSignedInMenu;
