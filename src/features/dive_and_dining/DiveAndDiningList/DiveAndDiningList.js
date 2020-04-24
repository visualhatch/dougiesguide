import React, {Component, Fragment} from 'react';
import DiveAndDiningListItem from "./DiveAndDiningListItem";

class DiveAndDiningList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.listings.map(listing => (
                    <DiveAndDiningListItem key={listing.id} listing={listing}/>
                ))}
            </Fragment>
        );
    }
}

export default DiveAndDiningList;