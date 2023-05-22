const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    identification_document: { type: String },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
