const { User, Transactions } = require("../../models");

exports.addTransaction = async (req, res) => {
  try {
    let data = req.body;
    data = {
      ...data,
      userId: req.idUser,
      transferProof: req.file.filename,
    };

    const dataTransaction = await Transactions.create(data);

    res.send({
      status: "success",
      data: { dataTransaction },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const data = await Transactions.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
      include: [
        {
          model: User,
          as: "Users",
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "password",
              "email",
              "roleId",
              "gender",
              "phone",
              "address",
              "image",
            ],
          },
        },
      ],
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Transactions.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
      include: [
        {
          model: User,
          as: "Users",
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "password",
              "email",
              "roleId",
              "gender",
              "phone",
              "address",
              "image",
            ],
          },
        },
      ],
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// update
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    let data = req.body;
    data = {
      ...data,
      userId: req.idUser,
      transferProof: req.file.filename,
    };

    await Transactions.update(data, {
      where: { id },
    });

    //todo
    const updatedData = await Transactions.findOne({
      where: { id },
    });
    res.send({
      status: "success",
      message: `Update Transaction id: ${id} finished`,
      data: updatedData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

// delete
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await Transactions.destroy({
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
