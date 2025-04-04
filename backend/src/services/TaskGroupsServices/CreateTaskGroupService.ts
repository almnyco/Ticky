import { SerializeTaskType } from "@/helpers/serializeTask";
import TaskGroupsModel from "../../database/models/taskgroups";

type Params = {
  data: SerializeTaskType;
};

async function CreateTaskGroupService({ data }: Params) {
  try {
    const taskgroup = await TaskGroupsModel.create(data);

    return taskgroup;
  } catch (error) {
    console.error("Erro ao criar grupo de tarefas: ", error);
  }
}

export default CreateTaskGroupService;
