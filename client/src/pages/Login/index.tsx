import { Input } from "../../components/Input";
import { RedirectPageLink } from "../../components/RedirectPageLink";
import { SubmitButton } from "../../components/SubmitButton";
import './styles.css'

export function Login() {
  return (
    <div className="login-page-container">
      <form className="login-form">
        <h2>Login</h2>
        <Input
          labelText="Username:"
          placeholder="Username"
          type="text" />

        <Input
          labelText="Password:"
          placeholder="Password"
          type="password" />

        <RedirectPageLink
          redirectTo='/register'
          redirectPageLinkText="If you have not registered, register here" />
        <SubmitButton submitButtonText="Login" />
      </form>
    </div>
  )
}