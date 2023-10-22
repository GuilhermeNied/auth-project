import { Input } from '../../components/Input'
import { RedirectPageLink } from '../../components/RedirectPageLink'
import { SubmitButton } from '../../components/SubmitButton'
import './styles.css'


export function Register() {
  return (
    <div className="register-page-container">
      <form className='register-form'>
        <h2>Register</h2>

        <Input
          labelText='Name:'
          placeholder='Name'
        />

        <Input
          labelText='Username:'
          placeholder='Username'
        />
        <Input
          labelText='Password:'
          placeholder='Password'
        />

        <RedirectPageLink
          redirectPageLinkText='If you are already registered, log in'
          redirectTo='/'
        />
        <SubmitButton submitButtonText='Register' />
      </form>
    </div>
  )
}