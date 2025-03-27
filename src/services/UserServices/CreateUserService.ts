import { SerializeUserType } from "@/helpers/serializeUser";
import UserModel from "../../database/models/user";

type Params = {
  data: SerializeUserType;
};

async function CreateUserService({ data }: Params) {
  try {
    const user = await UserModel.create(data);

    if (!user) return;

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
  }
}

export default CreateUserService;
