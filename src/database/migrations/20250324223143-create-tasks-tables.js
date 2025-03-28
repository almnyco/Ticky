"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE "Tasks" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL,
        title VARCHAR(255),
        description TEXT,
        status VARCHAR(25),
        start_date TIMESTAMP,
        due_date TIMESTAMP,
        archived BOOLEAN DEFAULT FALSE,
        priority VARCHAR(25) DEFAULT 'low',
        complete_date TIMESTAMP,
        assigned_to INTEGER[],
        deletedAt TIMESTAMP,

        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "Users"(id) ON DELETE CASCADE
      );
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tasks");
  },
};
