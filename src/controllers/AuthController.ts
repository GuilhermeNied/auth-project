import { Response, Request } from 'express';
import bcrypt from 'bcrypt';

export class AuthController {
  // constructor () {}

  register(req: Request, res: Response): Response {
    const { name, username, password } = req.body;

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      console.log(hashedPassword);

      const user = { name, username, hashedPassword };
      console.log(user);

      return res.status(201).json(user);
    } catch (error) {
      return res.send(500).json({ message: error });
    }
  }

  login(req: Request, res: Response): Response {
    const { username, password } = req.body;

    try {
      const pass = '1234';

      const hashedPassword = bcrypt.hashSync(pass, 10);

      const isPasswordValid = bcrypt.compareSync(password, hashedPassword);

      if (!isPasswordValid) {
        return res.sendStatus(400);
      }

      return res.sendStatus(200);
    } catch (error) {
      return res.send(500).json({ message: error });
    }
  }

  getAll(req: Request, res: Response): Response {
    const users = [
      { name: 'John', username: 'John' },
      { name: 'Gui', username: 'Gui' },
    ];
    return res.status(200).json(users);
  }

  get(req: Request, res: Response): Response {
    const { username } = req.params;
    const users = [
      { name: 'John', username: 'John' },
      { name: 'Gui', username: 'Gui' },
    ];
    const user = users.find((user) => user.username === username);
    return res.status(200).json(user);
  }

  update(req: Request, res: Response): Response {
    const users = [
      { name: 'John', username: 'John' },
      { name: 'Gui', username: 'Gui' },
    ];
    const { name } = req.body;
    const { username } = req.params;
    const user = users.find((user) => user.username === username);
    if (name && user) {
      user.name = name;
      return res.status(200).json(user);
    }
    return res.sendStatus(400);
  }

  delete(req: Request, res: Response): Response {
    return res.sendStatus(204);
  }
}
