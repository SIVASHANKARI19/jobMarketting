const { User } = require("../models");

const createUser = async (data) => {
  return await User.create(data);
};

const getAllUsers = async () => {
  return await User.findAll();
};

module.exports = {
  createUser,
  getAllUsers,
};