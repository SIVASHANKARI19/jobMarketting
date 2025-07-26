'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_Prediction.init({
    prediction_id: DataTypes.UUID,
    role: DataTypes.STRING,
    prediction_model: DataTypes.STRING,
    forecast_1m: DataTypes.INTEGER,
    forecast_6m: DataTypes.INTEGER,
    risk_score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Job_Prediction',
  });
  return Job_Prediction;
};