'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey_Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey_Response.init({
    response_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    role_type: DataTypes.STRING,
    challenge_faced: DataTypes.TEXT,
    salary_satisfied: DataTypes.BOOLEAN,
    submitted_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Survey_Response',
  });
  return Survey_Response;
};