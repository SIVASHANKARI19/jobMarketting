const { User } = require("../models");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const { name, email, password, role } = data;

  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);

  const user = await User.create({
    name,
    email,
    password_hash,
    role,
  });

  const plainUser = user.toJSON();
  delete plainUser.password_hash;
  return plainUser;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: ["user_id", "name", "email", "role", "registered_on"],
  });
  return users;
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
