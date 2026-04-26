import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.tsx';
import Services from "./pages/Services.tsx";
import Projects from "./pages/Projects.tsx";
import Careers from "./pages/Careers.tsx";
import Blogs from "./pages/Blogs.tsx";
import About from './pages/About.tsx';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>}/>
      <Route path = "/projects" element={<Projects/>}/>
      <Route path = "/careers" element = {<Careers/>}/>
      <Route path = "/blogs" element={<Blogs/>}/>
      <Route path = "/about" element={<About/>}/>
    </Routes>
  )
}

export default App
