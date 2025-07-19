'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chatbot_Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chatbot_Log.init({
    chat_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    question: DataTypes.TEXT,
    ai_response: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Chatbot_Log',
  });
  return Chatbot_Log;
};