'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   await queryInterface.createTable('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    defaultValue:""
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },
  password_hash: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },
  role: {
    type: Sequelize.ENUM('job_seeker', 'employer', 'analyst'),
    allowNull: false,
    defaultValue: 'job_seeker',
  },
  skills: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:""
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },
  desiredPosition: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:""
  },
  city: Sequelize.STRING,
  currentCompany: Sequelize.STRING,
  currentPosition: Sequelize.STRING,
  dateOfBirth: Sequelize.DATEONLY,
  expectedSalary: Sequelize.STRING,
  github: Sequelize.STRING,
  linkedIn: Sequelize.STRING,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};