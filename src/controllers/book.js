const { Book } = require("../../models");

// get allbooks
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    });

    res.send({
      status: "success",
      data: { books },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// get book
exports.getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    });

    res.send({
      status: "success",
      data: { book },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// add Book
exports.addBook = async (req, res) => {
  const data = req.body;
  data.image = req.file.filename;

  try {
    await Book.create(data);

    res.send({
      book: { data },
      status: "success",
      message: "Add Book finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// update Book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const { body } = req;

    if (req.file) {
      body.image = req.file.filename;
    }

    await Book.update(req.body, {
      where: { id },
    });

    res.send({
      status: "success",
      message: `Update Book id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// Delet Book
exports.deleteBook = async (req, res) => {
  try {
    // create auth
    const { id } = req.params;
    await Book.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      message: `Delete Book with id ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};
