import { User } from '../@types/User'
import { axiosInstance } from './axiosInstance'

export async function login({ username, password }: User) {
  const user = await axiosInstance.post('/user/login', { username, password })
  localStorage.setItem('userToken', user.data.token)
  localStorage.setItem('username', username)

  return user
}