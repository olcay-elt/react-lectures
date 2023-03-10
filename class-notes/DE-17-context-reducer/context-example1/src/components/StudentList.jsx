import React from "react";
import StudentItem from "./StudentItem";

const StudentList = ({ students, changeColor }) => {
    return (
        <div>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                    changeColor={changeColor}
                />
            ))}
        </div>
    );
};

export default StudentList;
