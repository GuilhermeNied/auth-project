import { axiosInstance } from './axiosInstance'

export async function getProfile(token: string, username: string) {
  return await axiosInstance.post(
    '/user/profile',
    { username },
    { headers: { Authorization: token } }
  )
}
