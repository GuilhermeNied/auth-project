import { useCookies } from "react-cookie";

export function useCookie(cookieKeyName: string) {
  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyName])

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