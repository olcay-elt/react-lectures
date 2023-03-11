import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import data from "./data";

//? Context oluşturma
export const StudentContext = createContext();
// export const {Provider} = createContext()

function App() {
    const [students, setStudents] = useState(data);

    const changeColor = (id, color) => {
        const newStudents = students.map((student) =>
            student.id === id ? { ...student, color: color } : student
        );
        setStudents(newStudents);
    };
    return (
        <div>
            {/* <Home students={students} changeColor={changeColor} /> */}
            <StudentContext.Provider value={{ students, changeColor }}>
                <Home />
            </StudentContext.Provider>
        </div>
    );
}
export default App;
