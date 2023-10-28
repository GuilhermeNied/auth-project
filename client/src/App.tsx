import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ColorSide } from './components/ColorSide'
import './App.css'
import { Home } from "./pages/Home";
import { getInLocalStorage } from "./utils/localStorage";

export function App() {
  const userDatas = getInLocalStorage('user')
  return (
    <div className="app-container">
      <BrowserRouter>
        <ColorSide />
        <Routes>
          <Route path="/" element={userDatas ? <Navigate to='/home' /> : <Login />} />
          <Route path="/register" element={userDatas ? <Navigate to='/home' /> : <Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}