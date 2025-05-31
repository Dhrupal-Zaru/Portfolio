import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
        <Route index element={<Navigate replace to='/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
