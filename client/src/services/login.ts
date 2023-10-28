import { User } from '../@types/User'
import { setInSessionStorage } from '../utils/sessionStorage'
import { axiosInstance } from './axiosInstance'

export async function login({ username, password }: User) {
  const user = await axiosInstance.post('/user/login', { username, password })
  const { token, userId } = user.data
  setInSessionStorage('user', { token, userId, username })

  return user
}
