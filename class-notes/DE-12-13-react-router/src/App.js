import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Router >
                <MyNavbar />
                <Routes >

                    <Route />
                    <Route />
                    <Route />

                </Routes>

            </Router>


        </div>
    )
}

export default App