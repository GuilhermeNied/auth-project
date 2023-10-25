import { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { RedirectPageLink } from '../../components/RedirectPageLink'
import { SubmitButton } from '../../components/SubmitButton'
import './styles.css'
import { register } from '../../services/register'


export function Register() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleChangeInput(setValue: (event: string) => void, event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  const isNameUsernameAndPasswordEmpty: boolean = name.length === 0 || username.length === 0 || password.length === 0


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = {
      name,
      username,
      password
    }
    try {
      await register(body)
      if (!isNameUsernameAndPasswordEmpty) {
        setName('')
        setUsername('')
        setPassword('')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-page-container">
      <form onSubmit={handleSubmit} className='register-form'>
        <h2>Register</h2>

        <Input
          labelText='Name:'
          placeholder='Name'
          type='name'
          value={name}
          onChange={(event) => handleChangeInput(setName, event)}
        />

        <Input
          labelText='Username:'
          placeholder='Username'
          type='username'
          value={username}
          onChange={(event) => handleChangeInput(setUsername, event)}

        />

        <Input
          labelText='Password:'
          placeholder='Password'
          type='password'
          value={password}
          onChange={(event) => handleChangeInput(setPassword, event)}

        />

        <RedirectPageLink
          redirectPageLinkText='If you are already registered, log in'
          redirectTo='/'
        />
        <SubmitButton submitButtonText='Register' disabled={isNameUsernameAndPasswordEmpty} />
      </form>
    </div>
  )
}