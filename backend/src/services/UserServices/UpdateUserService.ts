import { SerializeUserType } from "@/helpers/serializeUser";
import UserModel from "../../database/models/user";
import { UpdateOptions, WhereOptions } from "sequelize";

type Params = {
  data: SerializeUserType;
  where: WhereOptions;
};

async function UpdateUserService({ data, where = {} }: Params) {
  try {
    const options: UpdateOptions = { where, returning: true };

    const user = await UserModel.update(data, options);

    return user;
  } catch (error) {
    console.error("Erro ao atualizar usuário: ", error);
  }
}

export default UpdateUserService;
