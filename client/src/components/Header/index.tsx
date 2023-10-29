import { useNavigate } from "react-router-dom"
import { useCookie } from "../../hooks/useCookie"
import './styles.css'
import { LogOut } from "lucide-react"

export function Header() {
  const { removeCookies } = useCookie('user')
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    removeCookies()
  }

  return (
    <header className="header-container">
      <button onClick={handleLogout}>
        <LogOut />
      </button>
    </header>

  )
}