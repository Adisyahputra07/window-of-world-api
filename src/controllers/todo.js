let todos = [
  {
    id: 1,
    title: "Cuci tangan",
    isDone: true,
  },
  {
    id: 2,
    title: "Jaga jarak",
    isDone: false,
  },
];

// find all items
exports.getTodos = async (req, res) => {
  try {
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// find item where id
exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    let todo = todos.find((todo) => todo.id == id);
    res.send({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

//add items
exports.addTodo = async (req, res) => {
  try {
    todos.push(req.body);
    res.send({
      status: "success",
      data: req.body,
      todos: todos,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// Todo here
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    todos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...req.body };
      } else {
        return todo;
      }
    });

    res.send({
      status: "success",
      // todo
      data: { todos },
      // dataAfterEdit: todos,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// delete Todo here
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id != id);

    res.send({
      status: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
