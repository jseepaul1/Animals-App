import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import AnimalCarousel from "./AnimalCarousel";
import io from "socket.io-client";

const DisplayAllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  // this state will never use the setter method, it is set with the initial value
  const [socket] = useState(() => io(":8000")); // makes connection on port 8000
  useEffect(() => {
    console.log("Socket client side-", socket);
    // connect is a reserved/ expected type of event
    socket.on("connect", () => {
      console.log("Connected socket id - ", socket.id);
    });

    // listen for event about newly added animals
    socket.on("added_animal", (data) => {
      console.log("added_animal");
      console.log("Data-", data);
      // this takes in the current values of the array and create a new array with the new added animal
      // data is the new animal object
      setAnimals([...animals, data]);
    });

    socket.on("animal_deleted", (deletedAnimalId) => {
      setAnimals(animals.filter((animal) => animal._id !== deletedAnimalId));
    });

    // clean up our socket resources
    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [animals, socket]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/animals")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((err) => console.log("ERROR IN GET ALL", err));
  }, []);

  const handleDelete = (deletedId) => {
    setAnimals(animals.filter((animal) => animal._id !== deletedId));
  };
  return (
    <>
      <AnimalCarousel />
      <Container className="display-container">
        <div>
          <h2 className="h2">Welcome to Animal Kingdom!!</h2>
          <div className="all-animals">
            {animals.map((animal) => (
              <div className="card-wrapper" key={animal._id}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={animal.imageURL} alt="" />
                  <Card.Title>{animal.classification}</Card.Title>
                  <Card.Body variant="success">
                    <Link to={`/animal/${animal._id}`}>Details</Link>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <Link to={`/animal/edit/${animal._id}`} state={animal}>
                      Edit
                    </Link>
                    <br />
                    <DeleteButton id={animal._id} handleDelete={handleDelete} />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DisplayAllAnimals;
