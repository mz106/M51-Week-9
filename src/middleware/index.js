const bcrypt = require("bcrypt");

const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    next();
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    // find the user
    // compare password
    // 1 a. username incorrect
    // 1 b. password incorrect
    // 2. works
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

module.exports = {
  hashPass,
};
