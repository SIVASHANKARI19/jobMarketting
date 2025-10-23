'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    role: DataTypes.STRING,
    skills: DataTypes.TEXT,
    experience: DataTypes.STRING,
    desiredPosition: DataTypes.STRING,
    city: DataTypes.STRING,
    currentCompany: DataTypes.STRING,
    currentPosition: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    expectedSalary: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedIn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};