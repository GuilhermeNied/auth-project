import { User } from '../@types/User';
import { UserModel } from '../models/user';

export class AuthService {
  async getUserByUsername(username: string): Promise<User | null> {
    const user: User | null = await UserModel.findOne({ username });
    return user;
  }

  register(name: string, username: string, password: string): void {
    const newUser = new UserModel({ name, username, password });
    newUser.save();
  }

  // login()
}
