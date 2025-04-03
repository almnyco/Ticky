"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE "TaskGroups" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255),
        description TEXT,
        status VARCHAR(25)
      );
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TaskGroups");
  },
};
