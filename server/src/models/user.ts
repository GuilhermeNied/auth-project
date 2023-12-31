import { Schema, model } from 'mongoose';
import { User } from '../@types/User';

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<User>('user', UserSchema);
