import { authMiddleware } from '../middlewares/authMiddleware';
import jwt from 'jsonwebtoken';

describe('Auth middleware test', () => {
  it('should next is called when authentication is successful', () => {
    // GIVEN
    const req: any = {
      headers: {
        authorization: 'Bearer authToken',
      },
    };
    const res: any = {
      sendStatus: jest.fn(),
    };

    jest.spyOn(jwt, 'verify').mockImplementationOnce(() => {});

    const next = jest.fn();

    // WHEN
    authMiddleware(req, res, next);

    // THEN
    expect(next).toHaveBeenCalled();
  });
});

// Criar teste para quando der erro
