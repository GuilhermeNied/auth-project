import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export class AuthController {
  register(req: Request, res: Response): Response {
    const { name, username, password } = req.body;

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);

      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  login(req: Request, res: Response): Response {
    const { username, password } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const jwtSecretKey: string = process.env.JWT_SECRET_KEY!;

    try {
      // const pass = '1234';
      const userId = 312312312;

      // const hashedPassword = bcrypt.hashSync(pass, 10);

      // const isPasswordValid = bcrypt.compareSync(password, hashedPassword);

      // if (!isPasswordValid) {
      //   return res.sendStatus(400);
      // }
      const token = jwt.sign({ id: userId }, jwtSecretKey);

      const user = { token, userId };

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
