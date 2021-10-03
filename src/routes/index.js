const express = require("express");
const { auth, admin } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

const router = express.Router();

//Controller user
const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
const { login, register } = require("../controllers/auth");

//Controller Books
const { getBooks, getBook, addBook, updateBook, deleteBook } = require("../controllers/book");

//Controller Transaction
const {
  addTransaction,
  getTransactions,
  getTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transaction");

// Router User
router.post("/login", login);
router.post("/register", register);
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.patch("/profile", auth, uploadFile("image"), updateUser);
router.delete("/user/:id", deleteUser);

//init route controller Book
router.get("/books", getBooks);
router.get("/book/:id", getBook);
router.patch("/book/:id", auth, admin, uploadFile("image"), updateBook);
router.post("/book", auth, admin, uploadFile("image"), addBook);
router.delete("/book/:id", auth, admin, deleteBook);

//init route  Transaction
router.post("/transaction", auth, admin, uploadFile("image"), addTransaction);
router.get("/transactions", auth, admin, getTransactions);
router.get("/transaction/:id", getTransaction);
router.delete("/transaction/:id", auth, admin, deleteTransaction);
router.patch("/transaction/:id", auth, admin, uploadFile("image"), updateTransaction);

module.exports = router;
