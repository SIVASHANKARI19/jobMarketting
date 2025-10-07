const { User } = require("../models");
const bcrypt = require("bcrypt");
const createUser = async (data) => {
  return await User.create(data);
};

const getAllUsers = async () => {
  return await User.findAll();
};
const validateUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password_hash);
  return isMatch ? user : null;
};

module.exports = {
  createUser,
  getAllUsers,
  validateUser,
};
