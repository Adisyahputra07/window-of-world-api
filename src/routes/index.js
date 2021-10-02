const express = require("express");

const router = express.Router();

//Controller user
const {
  addUser,
  getUsers,
  // getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// Router User
router.get("/user", getUsers);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
