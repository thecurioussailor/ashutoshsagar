import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
