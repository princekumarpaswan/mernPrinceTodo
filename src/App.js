import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/home/login"
import Home from "./components/home/home"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default App;
