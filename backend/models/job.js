'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    requirements: DataTypes.TEXT,
    salary: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    remote: DataTypes.BOOLEAN,
    experience: DataTypes.STRING,
    tags: DataTypes.STRING,
    benefits: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};