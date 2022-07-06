import React from "react";
import { NavLink } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import AnimalCarousel from "./AnimalCarousel";

const Links = () => {
  return (
    <div>
      <AnimalCarousel />
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>Please Proceed by Clicking the link Below 😀</p>
        <NavLink to="/new">
          <h6>Add an Animal</h6>
        </NavLink>
      </Alert>
    </div>
  );
};

export default Links;
