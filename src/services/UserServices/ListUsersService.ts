import UserModel from "../../database/models/user";

async function ListUsersService() {
  try {
    const users = await UserModel.findAll();

    if (!users) return;

    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
  }
}

export default ListUsersService;
