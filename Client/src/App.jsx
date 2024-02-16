import React from 'react';
import Navbar from './navbar/Navbar';
import Home_page from './pages/homePage.jsx';
import Privacy from './Components/Privacy.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './contact/Contact.jsx';
import About from './about/About.jsx';
import Solution from './solution/Solution.jsx';
import Cookies from './Components/Cookies.jsx';
import Disclamer from './Components/discalmer.jsx';
import Terms_condition from './Components/terms_condition.jsx';

function App() {
    return (
        <Router>
            <div>
                <div className="bg-slate-100 md:pt-28">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home_page />} />
					<Route path="/contact" element={<Contact />}/>
					<Route path="/about1" element={<About />}/>
					<Route path="/solution" element={<Solution />}/>
                    <Route path="/terms_condition" element={<Terms_condition />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/disclamer" element={<Disclamer />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
