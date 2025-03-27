import { JWT_SECRET } from "@/constants";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type SignToken = {
  id: string;
  role: string;
  firstName: string;
};

type VerifyToken = {
  token: string;
};

// Function to sign a JWT Token
export const signToken = (data: SignToken) => {
  const options: jwt.SignOptions = {
    expiresIn: "30m",
    algorithm: "HS512",
  };

  const token = jwt.sign(
    {
      id: data.id,
      role: data.role,
      name: data.firstName,
    },
    JWT_SECRET,
    options,
  );

  return token;
};

// Function to verify JWT Token
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

// Function to generate a password hash
export const generatePassword = async (password: string) => {
  const salt = await bcrypt.genSalt(11);
  const passwordHash = await bcrypt.hash(password, salt);

  return passwordHash;
};

// Function to generate a user UUID
export const generateUserUUID = () => {
  const userUUID = uuidv4();

  return userUUID;
};
