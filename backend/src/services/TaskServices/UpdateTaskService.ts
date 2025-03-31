import { SerializeTaskType } from "@/helpers/serializeTask";
import TaskModel from "../../database/models/task";
import { UpdateOptions, WhereOptions } from "sequelize";

type Params = {
  data: SerializeTaskType;
  where: WhereOptions;
};

async function UpdateTaskService({ data, where = {} }: Params) {
  try {
    const options: UpdateOptions = { where, returning: true };

    const task = await TaskModel.update(data, options);

    return task;
  } catch (error) {
    console.error("Erro ao atualizar tarefa: ", error);
  }
}

export default UpdateTaskService;
