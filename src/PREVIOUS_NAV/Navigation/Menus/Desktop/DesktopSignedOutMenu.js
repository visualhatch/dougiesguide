import React from "react";
import { Button, Menu } from "semantic-ui-react";

const DesktopSignedOutMenu = ({ signIn, register }) => {
    return (
        <Menu.Item position="right">
            <Button inverted content="Login" onClick={signIn} />
            <Button
                onClick={register}
                inverted
                content="Register"
                style={{ marginLeft: "0.5em" }}
            />
        </Menu.Item>
    );
};

export default DesktopSignedOutMenu;
