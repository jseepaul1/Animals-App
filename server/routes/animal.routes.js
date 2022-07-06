const AnimalController = require("../controllers/animal.controller");

module.exports = (app) => {
  app.get("/api/animals", AnimalController.getAnimal);
  app.post("/api/animals", AnimalController.createAnimal);
  app.get("/api/animals/:id", AnimalController.getAnimalById);
  app.put("/api/animals/:id", AnimalController.updateAnimal);
  app.delete("/api/animals/:id", AnimalController.deleteAnimal);
};
