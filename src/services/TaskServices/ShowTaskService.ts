import { FindOptions, WhereOptions } from "sequelize";
import TaskModel from "../../database/models/task";

type Params = {
  where: WhereOptions;
  attr?: string[];
};

export const DEFAULT_TASK_ATTR = [
  "id",
  "userId",
  "title",
  "description",
  "status",
  "priority",
  "archived",
  "assigned_to",
  "start_date",
  "due_date",
  "complete_date",
  "deletedAt",
];

async function ShowTaskService({
  where = {},
  attr = DEFAULT_TASK_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const task = await TaskModel.findOne(options);

    if (!task) return;

    return task;
  } catch (error) {
    console.error("Erro ao buscar tarefa", error);
  }
}

export default ShowTaskService;
