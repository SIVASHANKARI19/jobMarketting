const { User } = require("../models");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const {
    name,
    email,
    password,
    role,
    phone,
    experience,
    skills,
    desiredPosition,
    city,
    currentCompany,
    currentPosition,
    dateOfBirth,
    expectedSalary,
    github,
    linkedIn
  } = data;

  if (!name || !email || !phone || !password || !skills || !experience || !desiredPosition) {
    throw new Error("Missing required fields");
  }

  // Hash the password
  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);

  // Create user
  const user = await User.create({
    name,
    email,
    password_hash,
    role,
    phone,
    experience,
    skills,
    desiredPosition,
    city,
    currentCompany,
    currentPosition,
    dateOfBirth,
    expectedSalary,
    github,
    linkedIn
  });

  // Remove password_hash from returned object
  const plainUser = user.toJSON();
  delete plainUser.password_hash;
  return plainUser;
};

const getAllUsers = async () => {
  return await User.findAll({
    attributes: ["id", "name", "email", "role", "createdAt"],
  });
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
