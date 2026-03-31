import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.tsx';
import Services from "./pages/Services.tsx";
import Projects from "./pages/Projects.tsx";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>}/>
      <Route path = "/projects" element={<Projects/>}/>
    </Routes>
  )
}

export default App
