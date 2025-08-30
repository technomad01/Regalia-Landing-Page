import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";
import Contact from "./pages/Contact.jsx";


export default function App() {
    return (
        <div>
            <div className="bg-gray-900 text-white py-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold">REGALIA</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/properties" className="hover:text-gray-300">Properties</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}