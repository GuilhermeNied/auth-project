import { User } from '../@types/User'
import { axiosInstance } from './axiosInstance'

export async function register({ name, username, password }: User) {
  await axiosInstance.post('/user/register', {
    name,
    username,
    password
  })
}
