import React from "react";
import StudentList from "../components/StudentList";

const Home = ({ students, changeColor }) => {
    return <StudentList students={students} changeColor={changeColor} />;
};

export default Home;
