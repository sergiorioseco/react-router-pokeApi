import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./views/Home.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemones from './views/Pokemones.jsx';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones/>} />
          <Route path="/pokemones/:id" element={<Pokemones />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

