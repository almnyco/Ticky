declare namespace Express {
  export interface Request {
    data?: {
      id: string;
      role: string;
      name: string;
    };
  }
}
