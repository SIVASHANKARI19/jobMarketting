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
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('job_seeker', 'employer', 'analyst'),
      allowNull: false,
      defaultValue: 'job_seeker'
    },
    registered_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    phone: {
  type: DataTypes.STRING,
  allowNull: false,
},
experience: {
  type: DataTypes.STRING,
  allowNull: false,
},
skills: {
  type: DataTypes.TEXT,
  allowNull: false,
},
desired_position: {
  type: DataTypes.STRING,
  allowNull: false,
},
portfolio: {
  type: DataTypes.STRING,
  allowNull: true,
},
linkedin: {
  type: DataTypes.STRING,
  allowNull: true,
},
github: {
  type: DataTypes.STRING,
  allowNull: true,
},

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};