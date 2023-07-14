import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
