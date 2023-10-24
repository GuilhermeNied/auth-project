import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../components/Input";
import { RedirectPageLink } from "../../components/RedirectPageLink";
import { SubmitButton } from "../../components/SubmitButton";
import './styles.css'

export function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleChangeInput(setValue: (event: string) => void, event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  const isUsernameAndPasswordEmpty: boolean = username.length === 0 || password.length === 0


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isUsernameAndPasswordEmpty) {
      console.log(username, password)
      setUsername('')
      setPassword('')
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