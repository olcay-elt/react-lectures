import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';

const App = () => {
    return (
        <div>
            <Router >
                <MyNavbar />
                <Routes >

                    <Route path="/" element={<Home />} />
                    <Route />
                    <Route />

                </Routes>
                <Footer />
            </Router>


        </div>
    )
}

export default App