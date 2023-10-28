import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import './styles.css'
import { getInSessionStorage, removeInSessionStorage } from "../../utils/sessionStorage"
import { useNavigate } from "react-router-dom"
import { User } from "../../@types/User"

export function Home() {
  const userDatas = getInSessionStorage('user')
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  const { token, username } = userDatas

  const handleLogout = () => {
    navigate('/')
    removeInSessionStorage('user')
  }

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
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}