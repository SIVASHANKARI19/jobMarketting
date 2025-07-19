'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Job_Predictions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prediction_id: {
        type: Sequelize.UUID
      },
      role: {
        type: Sequelize.STRING
      },
      prediction_model: {
        type: Sequelize.STRING
      },
      forecast_1m: {
        type: Sequelize.INTEGER
      },
      forecast_6m: {
        type: Sequelize.INTEGER
      },
      risk_score: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Job_Predictions');
  }
};