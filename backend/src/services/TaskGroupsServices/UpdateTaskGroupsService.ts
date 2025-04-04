import { SerializeTaskType } from "@/helpers/serializeTask";
import TaskGroupsModel from "../../database/models/taskgroups";
import { UpdateOptions, WhereOptions } from "sequelize";

type Params = {
  data: SerializeTaskType;
  where: WhereOptions;
};

async function UpdateTaskGroupService({ data, where = {} }: Params) {
  try {
    const options: UpdateOptions = { where, returning: true };

    const taskgroup = await TaskGroupsModel.update(data, options);

    return taskgroup;
  } catch (error) {
    console.error("Erro ao atualizar grupo de tarefas: ", error);
  }
}

export default UpdateTaskGroupService;
