import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from './components/LifeCyclesMethods';
import Clock from "./components/Clock"
import "./App.css"
function App() {
    return (
        <div className='container text-center mt-4'>
            <button></button>            {/* <LifeCycleMethods /> */}
            <Clock />
        </div>
    );
}

export default App