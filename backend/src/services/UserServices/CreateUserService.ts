import { SerializeUserType } from "@/helpers/serializeUser";
import UserModel from "../../database/models/user";

type Params = {
  data: SerializeUserType;
};

async function CreateUserService({ data }: Params) {
  try {
    const user = await UserModel.create(data);

    return user;
  } catch (error) {
    console.error("Erro ao criar usuário: ", error);
  }
}

export default CreateUserService;
