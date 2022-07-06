import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();
  console.log("location-", location.pathname);
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img
          className="header-image"
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Animal_Kingdom_logo.png"
          alt=""
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isHomePage ? (
              <NavLink className="display-link" to="/allAnimals">
                List of Animals
              </NavLink>
            ) : (
              <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Home Page</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/new">Add Animal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/allAnimals">List of Animals</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
