import React, { useState } from "react";
import Home from "./pages/Home";
import data from "./data";

export const StudentContext = createContext()

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
            <Home students={students} changeColor={changeColor} />
        </div>
    );
}
export default App;
