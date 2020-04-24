import React from 'react';
import {Button, Menu} from "semantic-ui-react";

const TabletSignedOutMenu = ({ signIn, register }) => {
    return (
        <Menu.Item fitted={'horizontally'}>
            <Button inverted content="Login" onClick={signIn} />
            <Button
                onClick={register}
                inverted
                content="Register"
                style={{ marginTop: "0.5em" }}
            />
        </Menu.Item>
    );
};

export default TabletSignedOutMenu;