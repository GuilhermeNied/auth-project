import { useCookies } from "react-cookie";

export function useCookie() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const setCookies = (value: any) => {
    setCookie('user', value)
  }

  const getCookies = () => {
    return cookies.user
  }

  const removeCookies = () => {
    removeCookie('user')
  }

  return {
    setCookies,
    removeCookies,
    getCookies
  }
}