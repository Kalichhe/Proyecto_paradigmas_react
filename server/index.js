// Mern = Mongo + Express + React + Node

// Development = Node.js server + React server

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Kalichhe:1001154064carloslopez1@clusterpruebas.sgp2q2x.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      phone: req.body.phone,
      identification_document: req.body.identification_document,
      email: req.body.email,
      city: req.body.city,
      neighborhood: req.body.neighborhood,
      address: req.body.address,
      age: req.body.age,
      gender: req.body.gender,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
      quote: req.body.quote,
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(1337, () => {
  console.log("The server just started");
});
