import { JWT_SECRET } from "@/constants";
import jwt from "jsonwebtoken";

type SignToken = {
  id?: string;
};

type VerifyToken = {
  token: string;
};

export const signToken = (data: SignToken) => {
  const options: jwt.SignOptions = {
    expiresIn: "1m",
    algorithm: "HS512",
  };

  const token = jwt.sign({ id: data.id }, JWT_SECRET, options);

  return token;
};

export const verifyToken = (data: VerifyToken) => {
  const token = data.token.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string") return { error: "Invalid Token!" };

    return decoded;
  } catch (error) {
    console.error(error);
    return { error: "Invalid Token!" };
  }
};
