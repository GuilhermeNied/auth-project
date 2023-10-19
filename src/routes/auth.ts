import { Request, Response, Router } from 'express';
import { AuthController } from '../controllers/AuthController';

export const router: Router = Router();
const authController = new AuthController();

// router.get('/:username', (req: Request, res: Response) => {
//   authController.get(req, res);
// });

// router.get('/users', (req: Request, res: Response) => {
//   authController.getAll(req, res);
// });

router.post('/register', (req: Request, res: Response) => {
  authController.register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
  authController.login(req, res);
});

// router.patch('/:username', (req: Request, res: Response) => {
//   authController.update(req, res);
// });

// router.delete('/:username', (req: Request, res: Response) => {
//   authController.delete(req, res);
// });
