import { InputHTMLAttributes } from "react"
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string
}

export function Input({ labelText, ...props }: InputProps) {
  return (
    <div className="input-container">
      <label>{labelText}</label>
      <input {...props} />
    </div>
  )
}