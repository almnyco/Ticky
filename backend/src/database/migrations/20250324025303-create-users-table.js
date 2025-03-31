"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE "Users" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        firstName VARCHAR(255),
        lastName VARCHAR(255),
        photo TEXT,
        role VARCHAR(25),
        email VARCHAR(255),
        password TEXT,
        accessToken TEXT,
        date_birth TIMESTAMP
      );
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
