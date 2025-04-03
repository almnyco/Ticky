"use strict";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TABLE "TaskGroupTask" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "taskGroupId" UUID NOT NULL,
        "taskId" UUID NOT NULL,

        CONSTRAINT "fk_taskGroup"
          FOREIGN KEY ("taskGroupId") REFERENCES "TaskGroups"("id")
          ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT "fk_task"
          FOREIGN KEY ("taskId") REFERENCES "Tasks"("id")
          ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT "unique_task_in_group"
          UNIQUE ("taskId")
      );
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TaskGroupTask");
  },
};
