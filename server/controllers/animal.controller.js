const Animal = require("../models/animal.model");

module.exports = {
  getAnimal: (req, res) => {
    Animal.find({})
      .sort("classification")
      .then((allAnimals) => {
        res.status(201).json(allAnimals);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "error in find all animals", error: err });
      });
  },

  createAnimal: (req, res) => {
    Animal.create(req.body)
      .then((newAnimal) => {
        res.status(201).json(newAnimal);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in create", error: err });
      });
  },

  getAnimalById: (req, res) => {
    Animal.findOne({ _id: req.params.id })
      .then((oneAnimal) => {
        res.status(201).json(oneAnimal);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findOne", error: err });
      });
  },

  updateAnimal: (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateOneAnimal) => {
        res.status(201).json(updateOneAnimal);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "error in findByIdAndUpdate", error: err });
      });
  },

  deleteAnimal: (req, res) => {
    Animal.deleteOne({ _id: req.params.id })
      .then((deleteAnimal) => {
        res.status(201).json(deleteAnimal);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in deleteAnimal", error: err });
      });
  },
};
