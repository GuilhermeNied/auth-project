import { Request, Response, Router } from 'express';
import { AuthController } from '../controllers/AuthController';

export const router: Router = Router();
const authController = new AuthController();

router.post('/register', (req: Request, res: Response) => {
  authController.register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
  authController.login(req, res);
});