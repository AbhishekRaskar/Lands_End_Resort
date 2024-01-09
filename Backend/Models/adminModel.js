const mongoose = require("mongoose");


// schema
const adminSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    email: String,
    password: String,
    city: String,
    phone: String,
  },
  {
    versionKey: false,
  }
);


// model
const AdminModel = mongoose.model("admin", adminSchema);

module.exports = {
  AdminModel,
};
