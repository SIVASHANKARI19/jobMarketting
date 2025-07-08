"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Job_Postings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salary_min: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      salary_max: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      skills_required: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      post_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Job_Postings");
  },
};
