import React, {Fragment} from 'react';
import {Button, Menu, Sidebar} from "semantic-ui-react";
import MobileSignedOutMenu from "../Menus/Mobile/MobileSignedOutMenu";
import {NavLink} from "react-router-dom";
// import { NavLink } from "react-router-dom";


const MobileNavBar = () => {

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
                        Dives & Dining
                    </Menu.Item>

                    <Button positive size={'mini'} onClick={() => console.log('Create New Clicked')}>Create New</Button>

                    <MobileSignedOutMenu/>
                    {/*{authenticated === false && (*/}
                    {/*    <MobileSignedOutMenu signIn={signIn} register={register} />*/}
                    {/*)}*/}
                </Sidebar>

                {/*{authenticated === true && (*/}
                {/*    <MobileSignedInMenu*/}
                {/*        signOut={signOut}*/}
                {/*        profile={profile}*/}
                {/*        visible={visible}*/}
                {/*    />*/}
                {/*)}*/}
            </Sidebar.Pusher>
        </Fragment>
    );
};

export default MobileNavBar;