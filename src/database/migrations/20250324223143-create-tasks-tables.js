"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE "Tasks" (
        id UUID PRIMARY KEY,
        user_id UUID NOT NULL,
        title VARCHAR(255),
        description TEXT,
        status VARCHAR(25),
        permission INTEGER[],

        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "Users"(id) ON DELETE CASCADE
      );
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tasks");
  },
};
