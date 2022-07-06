const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema(
  {
    classification: {
      type: String,
      required: [true, "Species is required"],
      enum: [
        "****Pick a species****",
        "Amphibians",
        "Birds",
        "Reptiles",
        "Mammals",
        "Insects",
        "Fish",
        "Invertebrates",
      ],
    },
    animalType: {
      type: String,
      required: [true, "Animal Type is required"],
      minlength: [3, "Type cannot be less than 3 characters"],
      maxlength: [15, "Type cannot be greater than 15 characters"],
    },
    imageURL: {
      type: String,
      required: [true, "We need an image"],
    },
    averageLifeSpan: {
      type: Number,
      required: [true, "Average Life Span is required"],
      min: [1, "Average Life Span cannot be less than 1 year"],
    },
    breed: {
      type: String,
    },
    isHumanFriendly: {
      type: Boolean,
      default: false,
      required: [true, "Is Human Friendly required"],
    },
    fact: {
      type: String,
      required: [true, "fact is required"],
      minlength: [8, "Fact cannot be less than 8 characters"],
    },
  },
  { timestamps: true }
);

const Animal = mongoose.model("Animal", AnimalSchema);
module.exports = Animal;