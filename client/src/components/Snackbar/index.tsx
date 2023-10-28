import { X as CloseIcon } from 'lucide-react'
import './styles.css'

interface SnackbarProps {
  text: string
  handleCloseSnackbar: () => void
  isSnackbarActive: boolean
}

export function Snackbar({ text, handleCloseSnackbar, isSnackbarActive }: SnackbarProps) {
  return (
    <div className={`snackbar-container ${isSnackbarActive ? 'snackbar-is-active' : ''}`}>
      <button type='button' onClick={handleCloseSnackbar}>
        <CloseIcon size={16} />
      </button>
      <span>{text}</span>
    </div>
  )
}