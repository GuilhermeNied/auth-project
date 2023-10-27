import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import { User } from "../../@types/User"

export function Home() {
  const [user, setUser] = useState<any>()
  const username = localStorage.getItem('username')
  const token = localStorage.getItem('userToken')




  useEffect(() => {
    async function getUser() {
      if (token && username) {
        const userData = await getProfile(token, username)
        console.log(userData);

        setUser(userData.data)
      }
    }

    getUser()

  }, [])

  return (
    <div>
      {user?.username}
    </div>
  )
}