import { SerializeTaskType } from "@/helpers/serializeTask";
import TaskModel from "../../database/models/task";

type Params = {
  data: SerializeTaskType;
};

async function CreateTaskService({ data }: Params) {
  try {
    const task = await TaskModel.create(data);

    return task;
  } catch (error) {
    console.error("Erro ao criar tarefa: ", error);
  }
}

export default CreateTaskService;
