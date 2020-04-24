import React from 'react';
import {Image, Menu, Sidebar} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

const TabletSignedInMenu = ({ signOut, profile, visible }) => {
    return (
        <Sidebar
            as={Menu}
            direction={"right"}
            animation="overlay"
            inverted
            vertical
            visible={visible}
            width="thin"
        >
            <Menu.Item className={"sidebarUsername"}>
                <Image
                    avatar
                    spaced="right"
                    src={profile.photoURL || "/assets/avatar/user.png"}
                />
                {profile.displayName}
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/add_a_dive"}
                text={"Add A Dive"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-plus sidebarIcon"></i>
                Add A Dive
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_favourites"}
                text={"Favourites"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-heart sidebarIcon"></i>
                Favourites
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_dives"}
                text={"Dives"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-star sidebarIcon"></i>
                Dives
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_checkins"}
                text={"Checkins"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-check sidebarIcon"></i>
                Checkins
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_messages"}
                text={"Messages"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-envelope sidebarIcon"></i>
                Messages
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_profile"}
                text={"Profile"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-user sidebarIcon"></i>
                Profile
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                exact
                to={"/my_settings"}
                text={"Settings"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-cog sidebarIcon"></i>
                Settings
            </Menu.Item>

            <Menu.Item
                text={"Sign Out"}
                // onClick={() => setVisible(false)}
            >
                <i className="fas fa-sign-out-alt sidebarIcon"></i>
                Sign Out
            </Menu.Item>
        </Sidebar>
    );
};

export default TabletSignedInMenu;