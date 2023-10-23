const User = require("./model");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.messsage, error });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });

    if (req.body.password === user.password) {
      res.status(201).json({ message: "successful login", user });
      return;
    }

    res.status(401).json({ message: "unauthorised" });
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
