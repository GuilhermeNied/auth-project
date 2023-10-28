import { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { RedirectPageLink } from '../../components/RedirectPageLink'
import { SubmitButton } from '../../components/SubmitButton'
import './styles.css'
import { register } from '../../services/register'
import { useNavigate } from 'react-router-dom'
import { Snackbar } from '../../components/Snackbar'
import { ColorSide } from '../../components/ColorSide'


export function Register() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isSnackbarActive, setIsSnackbarActive] = useState<boolean>(false)
  const [snackbarText, setSnackbarText] = useState<string>('')
  const navigate = useNavigate()
  const isNameUsernameAndPasswordEmpty: boolean = name.length === 0 || username.length === 0 || password.length === 0

  function handleChangeInput(setValue: (event: string) => void, event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  function handleCloseSnackbar() {
    setIsSnackbarActive(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = {
      name,
      username,
      password
    }
    try {
      await register(body)
      setTimeout(() => {
        navigate('/')
      }, 500)

      if (!isNameUsernameAndPasswordEmpty) {
        setName('')
        setUsername('')
        setPassword('')
      }

    } catch (error: any) {
      console.log(error);

      setSnackbarText(error.response.data.message)
      setIsSnackbarActive(true)
    }
  }

  return (
    <div className="register-page-container">
      <ColorSide />
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
        <Snackbar handleCloseSnackbar={handleCloseSnackbar} text={snackbarText} isSnackbarActive={isSnackbarActive} />

      </form>
    </div>
  )
}