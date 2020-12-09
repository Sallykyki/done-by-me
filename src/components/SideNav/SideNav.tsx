import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

interface IProps {}

interface IState {}

class SideNav extends React.Component<IProps, IState> {
  render() {
    return (
      <Nav className="flex-column component-SideNav">
        <Nav.Link className="component-SideNav__today">
          <Link to="/">Today</Link>
        </Nav.Link>
        <Nav.Link className="component-SideNav__week">
          <Link to="/week">Week</Link>
        </Nav.Link>
        <Nav.Link className="component-SideNav__habit">
          <Link to="/habit">Habit</Link>
        </Nav.Link>
      </Nav>
    );
  }
}

export default SideNav;
