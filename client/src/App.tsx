import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ColorSide } from './components/ColorSide'
import './App.css'
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ColorSide />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}