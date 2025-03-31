import { DEFAULT_TASK_ATTR } from "./ShowTaskService";
import TaskModel from "../../database/models/task";
import { FindOptions, WhereOptions } from "sequelize";

type Params = {
  where?: WhereOptions;
  attr?: string[];
};

async function ListTasksService({
  where = {},
  attr = DEFAULT_TASK_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const tasks = await TaskModel.findAll(options);

    if (!tasks) return;

    return tasks;
  } catch (error) {
    console.error("Erro ao buscar tarefas", error);
  }
}

export default ListTasksService;
