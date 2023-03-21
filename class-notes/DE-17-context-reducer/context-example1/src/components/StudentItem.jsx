import React, { useContext } from "react";
import { StudentContext } from "../App";

const StudentItem = ({ student }) => {
    console.log(student);
    const { id, name, age, color, email } = student;
    const { changeColor } = useContext(StudentContext);
    return (
        <div
            style={{
                background: color,
                paddingBottom: "2rem",
                paddingTop: "1rem",
                marginBottom: "1rem",
            }}
        >
            <h3>NAME: {name}</h3>
            <h4>EMAIL:{email} </h4>
            <h4>AGE:{age} </h4>
            Color:{" "}
            <input
                type="text"
                name="color"
                value={color}
                onChange={(e) => changeColor(id, e.target.value)}
            />
        </div>
    );
};

export default StudentItem;









function Form() {
    return
    <div>
        <div>
            <input name="fullname" placeholder="Full Name" />
        </div>
        <div>
            <input name="phone_number" placeholder="Phone Number" />
        </div>

    </div>
}

export default Form
