import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LifeCycleMethods from "./components/LifeCyclesMethods";
import Clock from "./components/Clock";
// import People from "./components/People";

function App() {
    const [goster, setGoster] = useState(true);

    return (
        <div>
            <div className="container text-center mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
                                {goster ? "SAKLA" : "GOSTER"}
                            </button>
                        </div>
                    </div>
                </div>

                <LifeCycleMethods />

                <div className="row justify-content-center my-3">
                    <div className="col-12 col-md-6 col-xl-4">
                        {goster ? <Clock /> : ""}
                    </div>
                </div>

                {/* 2.gösterim yolu */}
                <div className="row justify-content-center my-3">
                    <div className="col-12 col-md-6 col-xl-4">
                        {goster && <Clock />}
                    </div>
                </div>

                {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
                sağdaki doğruysa, hangisi true ise onu al */}
            </div>
            {/* <People /> */}
        </div>
    );
}

export default App;
