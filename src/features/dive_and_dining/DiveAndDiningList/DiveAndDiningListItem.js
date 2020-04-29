import React, { Component } from "react";
import { Button, Item, ItemImage, List, Segment } from "semantic-ui-react";
import DiveAndDiningListPhotos from "./DiveAndDiningListPhotos";

class DiveAndDiningListItem extends Component {
  render() {
    const { listing } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <ItemImage size={"tiny"} src={listing.photoURL} />
              <Item.Content>
                <Item.Header as={"a"}>{listing.title}</Item.Header>
                <Item.Description>
                  {listing.city}, {listing.state}, {listing.country}
                </Item.Description>
                  <Item.Description>
                      {listing.description.substring(0, 150)} {listing.description.length > 150 && <span onClick={() => console.log('read more')}>read more</span>}
                  </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {listing.userFavourites && listing.userFavourites.map(userFavourite => (
              <DiveAndDiningListPhotos key={userFavourite.id} userFavourite={userFavourite} />
            ))}
          </List>
        </Segment>

        <Segment clearing>
          <Button as={"a"} color={"green"} floated={"right"} content={"View"} />
        </Segment>
      </Segment.Group>
    );
  }
}

export default DiveAndDiningListItem;
