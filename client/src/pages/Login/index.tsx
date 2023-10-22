import { Input } from "../../components/Input";
import './styles.css'

export function Login() {
  return (
    <div className="login-page-container">
      <form className="login-form">
        <Input
          labelText="Username:"
          placeholder="Username"
          type="text" />

        <Input
          labelText="Password:"
          placeholder="Password"
          type="password" />

        <a href="/register">a</a>
        <button>Login</button>
      </form>
    </div>
  )
}