import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../components/Input";
import { RedirectPageLink } from "../../components/RedirectPageLink";
import { SubmitButton } from "../../components/SubmitButton";
import './styles.css'
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  function handleChangeInput(setValue: (event: string) => void, event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  const isUsernameAndPasswordEmpty: boolean = username.length === 0 || password.length === 0

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const body = {
        username,
        password
      }

      await login(body)
      setTimeout(() => {
        navigate('/home')
      }, 500)

      if (!isUsernameAndPasswordEmpty) {
        setUsername('')
        setPassword('')
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-page-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <Input
          labelText="Username:"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => handleChangeInput(setUsername, event)}
        />

        <Input
          labelText="Password:"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => handleChangeInput(setPassword, event)}
        />

        <RedirectPageLink
          redirectTo='/register'
          redirectPageLinkText="If you have not registered, register here"
        />
        <SubmitButton submitButtonText="Login" disabled={isUsernameAndPasswordEmpty} />
      </form>
    </div>
  )
}