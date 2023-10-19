import { Response, type Request } from 'express';

export class AuthController {
  // constructor () {}

  register(req: Request, res: Response): Response {
    const { name, username, password } = req.body;
    // const hasedPassword =
    const user = { name, username, password };
    // const
    return res.status(201).json(user);
  }

  login(req: Request, res: Response): Response {
    const { username, password } = req.body;

    return res.sendStatus(200);
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
