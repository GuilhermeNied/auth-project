import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { getInSessionStorage } from "./utils/sessionStorage";
import { PrivateRoute } from "./components/PrivateRoute";

export function App() {
  const userDatas = getInSessionStorage('user')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userDatas ? <Navigate to='/home' /> : <Login />} />
          <Route path="/register" element={userDatas ? <Navigate to='/home' /> : <Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}