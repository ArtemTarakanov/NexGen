import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.tsx';
import Services from "./pages/Services.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/services" element={<Services/>}/>
      </Routes>


    </>
  )
}

export default App
