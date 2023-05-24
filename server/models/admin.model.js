const mongoose = require("mongoose");

const Admin = new mongoose.Schema(

    {

        name: { type: String, require: true },
        identification_document: { type: String },
        email: { type: String, require: true, unique: true},
        password: { type: String, require: true },
        confirmpassword: { type: String, require: true },

    }, {
        collection: "admins"
    }

);

const model = mongoose.model("Admins", Admin)

module.exports = model;