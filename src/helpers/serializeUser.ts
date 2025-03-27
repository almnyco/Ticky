export type SerializeUserType = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  photo?: string;
  role: string;
  password: string;
  date_birth?: string;
  password_expiresAt?: string;
};

const serializeUser = (data: SerializeUserType): SerializeUserType => {
  //
  //
  //
  return {
    id: data?.id,
    date_birth: !data?.date_birth ? new Date().toString() : data?.date_birth,
    email: data?.email.toString(),
    firstName: data?.firstName,
    lastName: data?.lastName,
    password: data?.password,
    role: data?.role ?? "user",
    photo: data?.photo || undefined,
  };
};

export { serializeUser };
