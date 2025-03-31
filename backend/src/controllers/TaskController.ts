import { CredentialValidation, TaskValidation } from "@/helpers/validation";
import UpdateTaskService from "@/services/TaskServices/UpdateTaskService";
import RemoveTaskService from "@/services/TaskServices/RemoveTaskService";
import CreateTaskService from "@/services/TaskServices/CreateTaskService";
import ListTasksService from "../services/TaskServices/ListTasksService";
import ShowTaskService from "../services/TaskServices/ShowTaskService";
import { serializeTask } from "@/helpers/serializeTask";
import { Request, Response } from "express";
import ShowUserService from "@/services/UserServices/ShowUserService";

const create = async (req: Request, res: Response) => {
  const data = req.body;

  const v = TaskValidation(data);
  if (v?.error) return res.status(400).json(v);

  const exists = await ShowUserService({
    where: { id: req.data?.id },
  });

  if (!exists)
    return res.status(409).json({ error: "There is no user with this id." });

  data["userId"] = req.data?.id;
  const task = serializeTask(data);

  const created = await CreateTaskService({ data: task });

  if (!created)
    return res
      .status(400)
      .json({ error: "An error occurred while creating the task." });

  return res.status(200).json({ message: "Task created successfully!" });
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params?.id;

  const hasPasswordUpdate = data?.password || data?.passwordRepeat;

  const v = CredentialValidation(data, {
    validatePasswordCreation: hasPasswordUpdate,
  });
  if (v?.error) return res.status(400).json(v);

  const exists = await ShowTaskService({ where: { id } });

  if (!exists)
    return res.status(404).json({ error: "There is no task with this id." });

  const task = serializeTask(data);

  const updated = await UpdateTaskService({
    data: task,
    where: {
      id: exists.id,
    },
  });

  if (!updated)
    return res
      .status(400)
      .json({ error: "An error occurred while updating the task." });

  return res.status(200).json({ message: "Task updated successfully!" });
};

const show = async (req: Request, res: Response) => {
  const id = req.params?.id;

  if (!id)
    return res.status(400).json({ error: "Please enter a valid task ID." });

  const task = await ShowTaskService({ where: { id } });

  if (!task)
    return res.status(404).json({ error: "There is no task with this id." });

  return res.status(200).json(task);
};

const list = async (req: Request, res: Response) => {
  const tasks = await ListTasksService({});

  return res.status(200).json(tasks);
};

const remove = async (req: Request, res: Response) => {
  const id = req.params?.id;

  if (!id)
    return res.status(400).json({ error: "Please enter a valid task ID." });

  const exists = await ShowTaskService({ where: { id } });

  if (!exists)
    return res.status(404).json({ error: "There is no task with this id." });

  const deleted = await RemoveTaskService({
    where: {
      id,
    },
  });

  if (!deleted)
    return res
      .status(400)
      .json({ error: "An error occurred while deleting the task." });

  return res.status(200).json({ message: "Task deleted successfully!" });
};

const TaskController = {
  create,
  update,
  show,
  list,
  remove,
};

export default TaskController;
