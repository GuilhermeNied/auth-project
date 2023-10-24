import './styles.css'

interface SubmitButtonProps {
  submitButtonText: string
  disabled?: boolean
}

export function SubmitButton({ submitButtonText, disabled }: SubmitButtonProps) {
  return (
    <button className="submit-button" type="submit" disabled={disabled}>
      {submitButtonText}
    </button>
  )
}