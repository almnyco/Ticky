import TaskGroupsModel from "../../database/models/taskgroups";
import { DestroyOptions, WhereOptions } from "sequelize";

type Params = {
  where: WhereOptions;
};

async function RemoveTaskGroupsService({ where = {} }: Params) {
  try {
    const options: DestroyOptions = { where };

    const taskgroup = await TaskGroupsModel.destroy(options);

    return taskgroup;
  } catch (error) {
    console.error("Erro ao deletar grupo de tarefas: ", error);
  }
}

export default RemoveTaskGroupsService;
