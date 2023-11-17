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

  it("should returning 401 when token doesn't come", () => {
    // GIVEN
    const req: any = {
      headers: {
        authorization: undefined,
      },
    };
    const res: any = {
      sendStatus: jest.fn(),
    };

    const next = jest.fn();

    // WHEN
    authMiddleware(req, res, next);

    // THEN
    expect(res.sendStatus).toHaveBeenCalled();
    expect(res.sendStatus).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});
