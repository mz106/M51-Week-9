const User = require("./model");

const register = async (req, res) => {
  console.log(res);
  try {
    const user = await User.create(req.body);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.messsage, error });
  }
};

const login = async (req, res) => {
  try {
    res
      .status(201)
      .json({
        message: "loggedin",
        username: req.user.username,
        email: req.user.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.messsage, error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.messsage, error });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};
