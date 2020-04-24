import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import DiveAndDiningList from "../DiveAndDiningList/DiveAndDiningList";
import DiveAndDiningForm from "../DiveAndDiningForm/DiveAndDiningForm";

// DUMMY DATA
const listingsFromDashboard = [
  {
    id: "1",
    title: "Santas Pub",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    city: "Nashville",
    state: "TN",
    country: "USA",
    photoURL: "https://picsum.photos/id/1011/200",
    userFavourites: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Ashlee",
        photoURL: "https://randomuser.me/api/portraits/women/20.jpg"
      },
      {
        id: "c",
        name: "Lexi",
        photoURL: "https://randomuser.me/api/portraits/women/42.jpg"
      },
      {
        id: "d",
        name: "Gill",
        photoURL: "https://randomuser.me/api/portraits/women/10.jpg"
      },
      {
        id: "e",
        name: "Dave",
        photoURL: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "3rd Street Dive",
    description: "This is 3rd Street Description",
    city: "Louisville",
    state: "KY",
    country: "USA",
    photoURL: "https://picsum.photos/id/550/200",
    userFavourites: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Ashlee",
        photoURL: "https://randomuser.me/api/portraits/women/20.jpg"
      }
    ]
  },
  {
    id: "3",
    title: "Another Dive Bar",
    description: "This is Another Description",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    photoURL: "https://picsum.photos/id/1010/200",
    userFavourites: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Ashlee",
        photoURL: "https://randomuser.me/api/portraits/women/20.jpg"
      },
      {
        id: "c",
        name: "Charlotte",
        photoURL: "https://randomuser.me/api/portraits/women/43.jpg"
      },
      {
        id: "d",
        name: "Jim",
        photoURL: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  }
];

class DiveAndDiningDashboard extends Component {
  state = {
    listings: listingsFromDashboard,
    isOpen: false
  };

  handleIsOpenToggle = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const { listings, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <DiveAndDiningList listings={listings} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content={"Create New"}
            onClick={this.handleIsOpenToggle}
          />

          {isOpen && <DiveAndDiningForm cancelFormOpen={this.handleIsOpenToggle}/>}
        </Grid.Column>
      </Grid>
    );
  }
}

export default DiveAndDiningDashboard;
