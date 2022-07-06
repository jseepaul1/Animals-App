import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Form from "./Form";
import Button from "react-bootstrap/Button";

const UpdateAnimal = () => {
  const [currentAnimal, setCurrentAnimal] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const handleUnrecognizedId = () => {
    navigate("/new");
  };

  useEffect(() => {
    if (!state) {
      //   console.log("Fetching rom API", state);
      axios
        .get(`http://localhost:8000/api/animals/${id}`)
        .then((res) => {
          console.log(res);
          setCurrentAnimal(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentAnimal(state);
      //   console.log("coming from state", state);
    }
  }, [id, state]);

  const submitHandler = (animal, setErrors) => {
    axios
      .put(`http://localhost:8000/api/animals/${id}`, animal)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        // console.log("error", err);
        // console.log("error response", err.response);
        // console.log("error response data", err.response.data);
        console.log("error response data errors", err.response.data.errors);
        setErrors(err.response.data.error.errors);
      });
  };
  return currentAnimal ? (
    <>
      <h1>Update Animal!</h1>
      <Form
        submitHandler={submitHandler}
        buttonText={"UPDATE"}
        currentAnimal={currentAnimal}
      />
    </>
  ) : (
    <>
      <p>
        We're sorry, but we could not find the animal you are looking for. Would
        you like to add a new animal to our database?
      </p>
      <Button onClick={handleUnrecognizedId}>Add a new animal</Button>
    </>
  );
};

export default UpdateAnimal;
