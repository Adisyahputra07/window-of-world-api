const { User } = require("../../models");

exports.getUsers = async (req, res) => {
  const user = await User.findAll({
    attributes: {
      exclude: ["password", "updatedAt", "createdAt"],
    },
  });

  res.send({
    status: "success",
    data: { user },
  });
  try {
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// add User
exports.addUser = async (req, res) => {
  const data = req.body;

  try {
    const user = await User.create(data);

    res.send({
      data: { user },
      status: "success",
      message: "Add user finished",
      userAll: { user1 },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// update User
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.update(req.body, {
      where: { id },
    });

    res.send({
      status: "success",
      message: `Update user id: ${id} finished`,
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

// Delet user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      message: `Delete user with id ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};
