import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideNav from "./components/SideNav";

import TodayPage from "./pages/Today";
import WeekPage from "./pages/Week";
import HabitPage from "./pages/Habit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
          <Row>
            <Col lg={2} md={3} className="app__side-nav">
              <SideNav />
            </Col>
            <Col className="app__page-content">
              <Switch>
                <Route exact path="/">
                  <TodayPage />
                </Route>
                <Route path="/week">
                  <WeekPage />
                </Route>
                <Route path="/habit">
                  <HabitPage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
