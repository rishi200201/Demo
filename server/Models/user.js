const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: [true, "Roll Number is required"],
   minlength: [9, "Enter a valid roll number"],
   maxlength: [9, "Enter a valid roll number"],
    unique: [true, "Roll Number is already exist"]
  },
  fisrtName: {
    type: String,
    required: [true, "Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Name is required"],
    minlengt: [3, "Name must be atleast 3 characters"],
    minlengt: [20, "Name must be atmost 20 characters"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["Male", "Female", "Transgender"],
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please enter a valid email Id"],
    unique: true,
  },
});

let userModel = mongoose.model("user", userSchema);
module.exports = userModel;
