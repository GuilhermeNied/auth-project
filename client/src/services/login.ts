import { User } from '../@types/User'
import { setInLocalStorage } from '../utils/localStorage'
import { axiosInstance } from './axiosInstance'

export async function login({ username, password }: User) {
  const user = await axiosInstance.post('/user/login', { username, password })
  const { token, userId } = user.data
  setInLocalStorage('user', { token, userId, username })

  return user
}
