import { DEFAULT_TASK_ATTR } from "./ShowTaskGroupService";
import TaskGroupsModel from "../../database/models/taskgroups";
import { FindOptions, WhereOptions } from "sequelize";

type Params = {
  where?: WhereOptions;
  attr?: string[];
};

async function ListTaskGroupsService({
  where = {},
  attr = DEFAULT_TASK_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const taskgroup = await TaskGroupsModel.findAll(options);

    if (!taskgroup) return;

    return taskgroup;
  } catch (error) {
    console.error("Erro ao buscar lista de grupos de tarefas: ", error);
  }
}

export default ListTaskGroupsService;
