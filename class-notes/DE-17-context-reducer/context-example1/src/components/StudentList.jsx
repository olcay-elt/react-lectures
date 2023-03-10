import React from 'react'

const StudentList = ({ student }) => {
    return (
        <div>
            {students.map(student => <StudentItem key={student.id})}
        </div>
    )
}

export default StudentList