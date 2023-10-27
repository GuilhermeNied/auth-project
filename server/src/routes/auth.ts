import { Request, Response, Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const router: Router = Router();
const authController = new AuthController();

router.post('/register', (req: Request, res: Response) => {
  authController.register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
  authController.login(req, res);
});

router.post('/profile', authMiddleware, (req: Request, res: Response) => {
  authController.getUser(req, res);
});
