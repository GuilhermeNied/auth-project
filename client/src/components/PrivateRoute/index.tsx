import { ReactNode } from "react"
import { getInSessionStorage } from "../../utils/sessionStorage"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const user = getInSessionStorage('user')
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}