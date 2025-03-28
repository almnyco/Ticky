export type SerializeTaskType = {
  id?: string;
  userId: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  archived: boolean;
  assigned_to: number[];
  start_date: string;
  due_date: string;
  complete_date: string;
  deletedAt: string;
};

const serializeTask = (data: SerializeTaskType): SerializeTaskType => {
  //
  //
  //
  return {
    id: data?.id,
    userId: data?.userId,
    title: data?.title,
    description: data?.description,
    status: data?.status,
    priority: data?.priority ?? "low",
    archived: data?.archived ?? false,
    assigned_to: data?.assigned_to ?? [],
    start_date: data?.start_date,
    due_date: data?.due_date,
    complete_date: data?.complete_date,
    deletedAt: data?.deletedAt,
  };
};

export { serializeTask };
