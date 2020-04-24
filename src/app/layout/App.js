import React, { Component, Fragment } from "react";
import DiveAndDiningDashboard from "../../features/dive_and_dining/DiveAndDiningDashboard/DiveAndDiningDashboard";
import NavBar from "../../features/navigation/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className={'mainContainer'}>
            <Route exact path={"/dive_and_dining"} component={DiveAndDiningDashboard}/>

        </Container>
      </Fragment>
    );
  }
}

export default App;
