import {
  JWT_ACCESS_EXPIRES,
  JWT_ALGORITHM,
  JWT_REFRESH_EXPIRES,
  JWT_SECRET,
} from "@/constants";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/database/models/user";

type SignToken = {
  id: string;
  role: string;
  firstName: string;
};

type TokenType = {
  token: string;
};

// Function to sign a JWT Token
export const signToken = (
  payload: SignToken,
  options: jwt.SignOptions = {},
) => {
  const token = jwt.sign(
    {
      id: payload.id,
      role: payload.role,
      name: payload.firstName,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_ACCESS_EXPIRES,
      algorithm: JWT_ALGORITHM,
      ...options,
    },
  );

  return token;
};

// Function to verify JWT Token
export const verifyToken = (data: TokenType) => {
  const token = data.token.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (typeof payload === "string") return { error: "Invalid Token!" };

    return payload;
  } catch (error) {
    console.error(error);
    return { error: "Invalid Token!" };
  }
};

// Function to refresh JWT Token
export const refreshToken = async (data: TokenType) => {
  const token = data.token.replace("Bearer ", "");

  try {
    const payload = verifyToken({ token });
    if (payload.type !== "refresh") return { error: "Invalid Token type!" };

    const user = await User.findOne({
      where: { id: payload.id, refreshToken: payload.token },
    });

    if (!user) return { error: "Invalid Refresh Token!" };

    const newAccessToken = signToken(user);
    const newRefreshToken = signToken(user, { expiresIn: JWT_REFRESH_EXPIRES });

    return { newAccessToken, newRefreshToken };
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
