import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const { authorization } = req.headers;

  const jwtSecretKey: string = process.env.JWT_SECRET_KEY!;
  if (!authorization) {
    return res.sendStatus(401);
  }

  jwt.verify(authorization, jwtSecretKey);

  next();
}
