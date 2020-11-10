import React from "react";
import Nav from "react-bootstrap/Nav";

interface IProps {}

interface IState {}

class SideNav extends React.Component<IProps, IState> {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Today</Nav.Link>
        <Nav.Link eventKey="link-1">Week</Nav.Link>
        <Nav.Link eventKey="link-2">Habits</Nav.Link>
      </Nav>
    );
  }
}

export default SideNav;
