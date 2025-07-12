'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_Posting.init({
    job_id: DataTypes.UUID,
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    salary_min: DataTypes.INTEGER,
    salary_max: DataTypes.INTEGER,
    skills_required: DataTypes.ARRAY(DataTypes.STRING),
    industry: DataTypes.STRING,
    post_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job_Posting',
  });
  return Job_Posting;
};