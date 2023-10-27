import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"

export function Home() {
  const [user, setUser] = useState()
  const username = localStorage.getItem('username')
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {
      if (token && username) {
        await getProfile(token, username)

      }
    }

  }, [token, username])

  return (
    <div>
      Home
    </div>
  )
}