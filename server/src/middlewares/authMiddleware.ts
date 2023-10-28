import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const { authorization } = req.headers;

  const authorizationToken = authorization?.split(' ')[1];

  const jwtSecretKey: string = process.env.JWT_SECRET_KEY!;
  if (!authorizationToken) {
    return res.sendStatus(401);
  }

  jwt.verify(authorizationToken, jwtSecretKey);

  next();
}
