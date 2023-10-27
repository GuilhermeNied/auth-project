import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { AuthService } from '../services/AuthService';

export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { name, username, password } = req.body;
    const authService = new AuthService();

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const userAlreadyExists = await authService.getUserByUsername(username);

      if (userAlreadyExists) {
        return res.status(400).json({ message: 'UserAlreayExists' });
      }

      authService.register(name, username, hashedPassword);

      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    const authService = new AuthService();

    const { username, password } = req.body;
    const jwtSecretKey: string = process.env.JWT_SECRET_KEY!;

    try {
      const user = await authService.getUserByUsername(username);

      if (!user) {
        return res.sendStatus(400);
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return res.sendStatus(400);
      }

      const token = jwt.sign({ id: user.id }, jwtSecretKey);

      return res.status(200).json({ token, userId: user.id });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    const { username } = req.body;

    const authService = new AuthService();
    try {
      const user = await authService.getUserByUsername(username);
      if (!user) {
        return res.sendStatus(400);
      }
      return res.status(200).json({ name: user.name, username: user.name });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
