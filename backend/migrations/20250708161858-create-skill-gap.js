"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Skill_Gaps", {
      skill_id: {
        type: Sequelize.INTEGER,
        // defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "Users",
        //   key: "user_id",
        // },
        onDelete: "CASCADE",
      },
      existing_skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      target_role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      missing_skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      suggested_courses: {
        type: Sequelize.JSONB,
        allowNull: true,
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
    await queryInterface.dropTable("Skill_Gaps");
  },
};
