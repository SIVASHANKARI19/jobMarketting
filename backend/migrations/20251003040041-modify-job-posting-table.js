'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Job_Postings','job_id');
    await queryInterface.removeColumn('Job_Postings','salary_min');
    await queryInterface.removeColumn('Job_Postings','salary_max');
    await queryInterface.removeColumn('Job_Postings','post_date');
    await queryInterface.removeColumn('Job_Postings','industry');
    await queryInterface.addColumn('Job_Postings','salary', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Job_Postings','type', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Job_Postings','remote', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('Job_Postings','description', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('Job_Postings','requirements', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
    await queryInterface.addColumn('Job_Postings','experience', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Job_Postings','postedBy', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Job_Postings','posted', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Job_Postings','saved', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('Job_Postings','tags', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
