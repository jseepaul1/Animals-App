import axios from "axios";
import Button from 'react-bootstrap/Button';
import io from "socket.io-client";
import{ useState} from "react";

export const DeleteButton = (props) => {
    const [socket] = useState(() => io(":8000"));
    const { id, handleDelete } = props;
    const deleteHandler = () => {
      axios
        .delete(`http://localhost:8000/api/animals/${id}`)
        .then((response) => {
          console.log(response);     
          handleDelete(id);
          alert("Are you sure you want to delete this animal?")
          socket.emit('deleted_animal', response.data);
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    };
    return <Button className ="button" variant = "danger" onClick={deleteHandler}>Delete</Button>;
  };
