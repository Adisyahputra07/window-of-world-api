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

//Controller user
const { getBooks, getBook, addBook, updateBook, deleteBook } = require("../controllers/book");

//init route controller Book
router.get("/books", getBooks);
router.get("/book/:id", getBook);
router.post("/book", addBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
