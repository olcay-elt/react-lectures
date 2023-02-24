import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from './components/LifeCyclesMethods';
import Clock from "./components/Clock"
function App() {
    return (
        <div>
            <LifeCycleMethods />
            <Clock />
        </div>
    );
}

export default App