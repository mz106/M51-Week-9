const bcrypt = require("bcrypt");

const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    if (!req.body.password) {
      res.status(500).json({ message: "password missing" });
      return;
    }

    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    next();
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    // check username exists
    // find the user
    // 1 a. username incorrect
    // compare password
    //
    // 1 b. password incorrect
    // 2. it works

    if (!req.body.username) {
      res.status(500).json({ message: "username missing" });
      return;
    }

    const user = await User.findOne({ where: { username: req.body.username } });

    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      res.status(401).json({ message: "not authorized" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

module.exports = {
  hashPass,
  comparePass,
};
