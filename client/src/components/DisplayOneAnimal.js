import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DisplayOneAnimal = () => {
  const [animal, setAnimal] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/animals/${id}`)
      .then((res) => {
        console.log(res);
        setAnimal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container>
      <div className="one-card">
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={animal.imageURL} alt="" />
          <Card.Body>
            <h2>
              <Card.Title>Classification: {animal.classification}</Card.Title>
            </h2>
            <p className="display-one">Animal Type: {animal.animalType}</p>
            <p className="display-one">
              Average Life Span: {animal.averageLifeSpan} Years
            </p>
            <p className="display-one">Breed: {animal.breed}</p>
            {animal.isHumanFriendly ? (
              <p className="display-one">Humans Best Buddy 😎</p>
            ) : (
              <p className="display-one">Too Dangerous 😱</p>
            )}
            <p className="display-one">Fact: {animal.fact}</p>
            <div className ="display-one-links">
              <DeleteButton
                id={animal._id}
                handleDelete={() => navigate("/")}
              />
              <Button variant="success">
                <Link
                  className="display-link"
                  to={`/animal/edit/${animal._id}`}
                  state={animal}
                >
                  Edit
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default DisplayOneAnimal;
