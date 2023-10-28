import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import './styles.css'
import { getInLocalStorage, removeInLocalStorage } from "../../utils/localStorage"
import { useNavigate } from "react-router-dom"

export function Home() {
  const [user, setUser] = useState<any>()
  const userDatas = getInLocalStorage('user')
  const { token, username } = userDatas
  const navigate = useNavigate()

  const handleLogout = () => {
    removeInLocalStorage('user')
    navigate('/')
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