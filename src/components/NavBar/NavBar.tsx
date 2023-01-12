import React from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <Navbar expand="lg"  variant="dark" className="customNavbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="images/logo-no-background.png"
                  width="150"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Container>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Resources</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
