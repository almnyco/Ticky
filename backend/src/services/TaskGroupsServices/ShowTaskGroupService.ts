import { FindOptions, WhereOptions } from "sequelize";
import TaskGroupsModel from "../../database/models/taskgroups";

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

async function ShowTaskGroupService({
  where = {},
  attr = DEFAULT_TASK_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const taskgroup = await TaskGroupsModel.findOne(options);

    if (!taskgroup) return;

    return taskgroup;
  } catch (error) {
    console.error("Erro ao buscar grupo de tarefas:", error);
  }
}

export default ShowTaskGroupService;
