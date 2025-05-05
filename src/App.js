import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Gallery from "./pages/Gallery.js";
import AcademicPerformance from './pages/AcademicPerformance.js';
import Navbar from './common/Navbar.js';

function App() {
    return (
        <BrowserRouter basename="/kid-portfolio">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/academic" element={<AcademicPerformance />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
