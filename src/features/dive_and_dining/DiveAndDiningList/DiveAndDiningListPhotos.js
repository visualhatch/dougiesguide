import React, {Component} from 'react';
import {Image, List} from "semantic-ui-react";

class DiveAndDiningListPhotos extends Component {
    render() {
        const {userFavourite} = this.props
        return (
            <List.Item>
                <Image as={'a'} size={'mini'} circular src={userFavourite.photoURL}/>
            </List.Item>
        );
    }
}

export default DiveAndDiningListPhotos;