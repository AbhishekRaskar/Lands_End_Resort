const express = require("express");
const { AdminModel } = require("../Models/adminModel");
const adminRouter = express.Router();
// name: String,
// img: String,
// email: String,
// password: String,
// city: String,
// phone: String,



adminRouter.post("/admin-register", async (req, res) => {
  const { name, email, img, password, city, phone } = req.body;
  try {
    const admin = new AdminModel({
      name,
      email,
      password: "Admin",
      city,
      phone,
      img
    });
    await admin.save();
    res.status(200).json({ msg: "admin has been registered", data: req.body });
  } catch (error) {
    res.status(400).json({ err: error.message, data: req.body });
  }
});

adminRouter.get("/", async (req, res) => {
  try {
    const admin = await AdminModel.find()
    res.json({ msg: "Admin List", admin })
  } catch (error) {
    res.json({ error: error.message })
  }
})
module.exports = {
  adminRouter,
};
