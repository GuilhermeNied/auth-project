import { useEffect, useState } from "react"
import { getProfile } from "../../services/getProfile"
import './styles.css'
import { getInLocalStorage } from "../../utils/localStorage"

export function Home() {
  const [user, setUser] = useState<any>()
  const userDatas = getInLocalStorage('user')
  const { token, username } = userDatas

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