'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Skills_Gaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skill_id: {
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.UUID
      },
      existing_skills: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      target_role: {
        type: Sequelize.STRING
      },
      missing_skills: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      suggested_courses: {
        type: Sequelize.JSON
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
    await queryInterface.dropTable('Skills_Gaps');
  }
};