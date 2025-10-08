'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','phone');
    await queryInterface.addColumn('Users', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    });

    await queryInterface.addColumn('Users', 'experience', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    });

    await queryInterface.addColumn('Users', 'skills', {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    });

    await queryInterface.addColumn('Users', 'desired_position', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    });

    await queryInterface.addColumn('Users', 'portfolio', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'linkedin', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'github', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'phone');
    await queryInterface.removeColumn('Users', 'experience');
    await queryInterface.removeColumn('Users', 'skills');
    await queryInterface.removeColumn('Users', 'desired_position');
    await queryInterface.removeColumn('Users', 'portfolio');
    await queryInterface.removeColumn('Users', 'linkedin');
    await queryInterface.removeColumn('Users', 'github');
  }
};
