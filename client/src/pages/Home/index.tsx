import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import './styles.css'

export function Home() {
  const [user, setUser] = useState<any>()
  const username = localStorage.getItem('username')
  const token = localStorage.getItem('userToken')




  useEffect(() => {
    async function getUser() {
      if (token && username) {
        const userData = await getProfile(token, username)
        setUser(userData.data)
      }
    }

    getUser()

  }, [token, username])

  return (
    <div className="home-container">
      <h2>Hello,</h2>
      <span>{user?.name}</span>
    </div>
  )
}