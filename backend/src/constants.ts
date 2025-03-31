import { SignOptions } from "jsonwebtoken";

export const JWT_SECRET = process.env.JWT_SECRET ?? "";
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? "";
export const JWT_ACCESS_EXPIRES = (process.env.JWT_ACCESS_EXPIRES ??
  "30m") as SignOptions["expiresIn"];
export const JWT_REFRESH_EXPIRES = (process.env.JWT_REFRESH_EXPIRES ??
  "1h") as SignOptions["expiresIn"];

export const JWT_ALGORITHM = (process.env.JWT_REFRESH_ALGORITHM ??
  "HS512") as SignOptions["algorithm"];
