const express = require("express");
const app = express();
const cors = require("cors");
require("./config/mongoose.config");
const PORT = 8000;
const socket = require("socket.io");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes/animal.routes")(app);

// node http server is returned
const server = app.listen(PORT, () => {
  console.log(`You are connected to port ${PORT}`);
});

// socket is connected to server
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

// connection allows the client to connect to server over socket
io.on("connection", (socket) => {
  console.log("Server Side socket id:" + socket.id);

  // listen for new animal added
  socket.on("new_animal_added", (data) => {
    // console.log("new_animal_added");
    // console.log(data);
    socket.broadcast.emit("added_animal", data); // this sends the message to all clients listening
  });
  
  socket.on("deleted_animal", (animalId) => {
    console.log("deleted animal");
    socket.broadcast.emit("animal_deleted", animalId);
  });
});
