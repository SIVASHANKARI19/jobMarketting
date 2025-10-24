'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      requirements: {
        type: Sequelize.TEXT
      },
      salary: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      remote: {
        type: Sequelize.BOOLEAN
      },
      experience: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      benefits: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Jobs');
  }
};