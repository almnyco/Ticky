import TaskModel from "../../database/models/task";
import { DestroyOptions, WhereOptions } from "sequelize";

type Params = {
  where: WhereOptions;
};

async function UpdateTaskService({ where = {} }: Params) {
  try {
    const options: DestroyOptions = { where };

    const task = await TaskModel.destroy(options);

    return task;
  } catch (error) {
    console.error("Erro ao deletar tarefa: ", error);
  }
}

export default UpdateTaskService;
