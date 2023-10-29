import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useCookie } from "../../hooks/useCookie"
import { Header } from "../Header"

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { getCookies } = useCookie('user')

  const user = getCookies()
  if (!user) {
    return <Navigate to='/' />
  }
  return (
    <>
      <Header />
      {children}
    </>



  )
}