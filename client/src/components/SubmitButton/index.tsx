import './styles.css'

interface SubmitButtonProps {
  submitButtonText: string
}

export function SubmitButton({ submitButtonText }: SubmitButtonProps) {
  return (
    <button className="submit-button" type="submit">
      {submitButtonText}
    </button>
  )
}