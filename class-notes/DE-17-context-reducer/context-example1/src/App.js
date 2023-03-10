import React from "react";
import Home from "./pages/Home";
import data from
    function App() {
        const [students, setStudents] = useState(data);

        const changeColor = (color) => {
            setStudents()
        }
        return (
            <div>
                <Home students={students} changeColor={changeColor} />
            </div>
        );
    }
export default App;
