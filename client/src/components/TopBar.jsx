import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed">
        <Container fluid>
          <h4 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Online भान्सा
          </h4>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link>Our Reviews</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/contact" activeClassName="">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link>terms and policy</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
