import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import './styles.css'
import { useNavigate } from "react-router-dom"
import { User } from "../../@types/User"
import { useCookie } from "../../hooks/useCookie"

export function Home() {
  const { getCookies, removeCookies } = useCookie('user')
  const [user, setUser] = useState<User>()

  const userDatas = getCookies()
  const navigate = useNavigate()
  const { token, username } = userDatas


  const handleLogout = () => {
    navigate('/')
    removeCookies()
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