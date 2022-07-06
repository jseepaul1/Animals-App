import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import io from "socket.io-client";
import { useState } from "react";

const CreateAnimal = () => {
  const [socket] = useState(() => io(":8000"));
  const navigate = useNavigate();
  const submitHandler = (animal, setErrors) => {
    axios
      .post("http://localhost:8000/api/animals", animal)
      .then((response) => {
        // send this message directly to the server
        socket.emit("new_animal_added", response.data);

        socket.disconnect();
        navigate("/allAnimals");
      })
      .catch((err) => {
        // console.log("error", err);
        // console.log("error response", err.response);
        // console.log("error response data", err.response.data);
        console.log("error response data errors", err.response.data.errors);
        setErrors(err.response.data.error.errors);
      });
  };
  return (
    <div>
      <h2>Add an Animal!</h2>
      <Form submitHandler={submitHandler} buttonText={"Add"} />
    </div>
  );
};

export default CreateAnimal;
