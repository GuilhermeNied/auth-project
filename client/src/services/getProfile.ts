import { axiosInstance } from './axiosInstance'

export async function getProfile(token: string, username: string) {
  await axiosInstance.get('/user/profile', {
    data: { username },
    headers: { Authorization: token }
  })
}
