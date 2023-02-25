import LifeCycleMethods from "./components/LifeCyclesMethods";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./components/Clock";
import "./App.css";
import { useState } from "react"; import People from "./components/People";
function App() {
    const [goster, setGoster] = useState(true);

    return (
        <div>
            <div className="container text-center mt-4">
                {/* <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        {goster ? "SAKLA" : "GOSTER"}
      </button> */}
                {/* <LifeCycleMethods/> */}

                {/* {goster ?    <Clock/> : ""} */}
                {/* 2.gösterim yolu */}
                {/* {goster && <Clock />} */}

                {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
      sağdaki doğruysa, hangisi true ise onu al */}
            </div>
            <People />
        </div>
    );
}

export default App;
