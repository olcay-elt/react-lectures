import MyNavbar from './compenents/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import data from './data'
import CourseCard from "./compenents/CourseCard"
import Footer from "./compenents/Footer"

function App() {
    return (
        <div >
            <MyNavbar />
            <CourseCard />
            <Footer />
        </div>
    );
}

export default App;
