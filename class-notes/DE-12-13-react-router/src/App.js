import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Contact from './pages/ContactForm';
import CourseCard from './pages/CourseCard';

const App = () => {
    return (
        <div>
            <Router>
                <MyNavbar />

                <Routes>
                    {/* / (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         / başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<CourseCard />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App