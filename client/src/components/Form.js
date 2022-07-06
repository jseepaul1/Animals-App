import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import React from "react";

const Form = (props) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/allAnimals");
  };

  const [animal, setAnimal] = useState(
    props.currentAnimal || {
      classification: "",
      animalType: "",
      imageURL: "",
      averageLifeSpan: 0,
      breed: "",
      isHumanFriendly: false,
      fact: "",
    }
  );

  useEffect(() => {
    console.log("test", props.currentAnimal);
    if (props.currentAnimal) {
      setAnimal(props.currentAnimal);
    }
  }, [props.currentAnimal]);

  const [errors, setErrors] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(animal, setErrors);
  };

  const handleChange = (e) => {
    if (e.target.name === "isHumanFriendly") {
      setAnimal({ ...animal, [e.target.name]: e.target.checked });
    } else {
      setAnimal({ ...animal, [e.target.name]: e.target.value });
    }
  };
  return (
    <Container className="form-container">
      <form onSubmit={submitHandler}>
        <div className="form">
          <label>Classification:</label>
          <select
            onChange={handleChange}
            name="classification"
            value={animal.classification}
          >
            <option>SELECT A CLASSIFICATION</option>
            <option value="Amphibians">Amphibians</option>
            <option value="Birds">Birds</option>
            <option value="Reptiles">Reptiles</option>
            <option value="Mammals">Mammals</option>
            <option value="Insects">Insects</option>
            <option value="Fish">Fish</option>
            <option value="Invertebrates">Invertebrates</option>
          </select>
          {errors.classification && <p>{errors.classification.message}</p>}
          <br />
          <label>Animal Type:</label>
          <input
            type="text"
            value={animal.animalType}
            onChange={handleChange}
            name="animalType"
          />
          <br />
          {errors.animalType && <p>{errors.animalType.message}</p>}
          <label>ImageURL:</label>
          <input
            type="text"
            value={animal.imageURL}
            onChange={handleChange}
            name="imageURL"
          />
          {errors.imageURL && <p>{errors.imageURL.message}</p>}
          <br />
          <label>Breed:</label>
          <input
            type="text"
            value={animal.breed}
            onChange={handleChange}
            name="breed"
          />
          {errors.breed && <p>{errors.breed.message}</p>}
          <br />
          <label>isHumanFriendly ?</label>
          <input
            type="checkbox"
            checked={animal.isHumanFriendly}
            onChange={handleChange}
            name="isHumanFriendly"
          />
          {errors.isHumanFriendly && <p>{errors.isHumanFriendly.message}</p>}
          <br />
          <label>Average Life Span:</label>
          <input
            type="number"
            value={animal.averageLifeSpan}
            onChange={handleChange}
            name="averageLifeSpan"
          />
          {errors.averageLifeSpan && <p>{errors.averageLifeSpan.message}</p>}
          <br />
          <label>State a Fact:</label>
          <input
            type="text"
            value={animal.fact}
            onChange={handleChange}
            name="fact"
          />
          {errors.fact && <p>{errors.fact.message}</p>}
          <br />
          <input className="input" type="submit" value={props.buttonText} />
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
