import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { CookiesProvider } from "react-cookie";
import { useCookie } from "./hooks/useCookie";

export function App() {
  const { getCookies } = useCookie('user')
  const userDatas = getCookies()
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={userDatas ? <Navigate to='/home' /> : <Login />} />
            <Route path="/register" element={userDatas ? <Navigate to='/home' /> : <Register />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>

  )
}