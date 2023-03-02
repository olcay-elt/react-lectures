//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, a  etiketini kullanın.

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

//!react-bootstrap MyNavbar component

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className="nav-link"
                            style={({ isActive }) => ({ color: isActive && "red" })}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/teacher"
                            className="nav-link"
                            style={({ isActive }) => ({ backgroundColor: isActive && "red" })}
                        >
                            Teacher
                        </NavLink>

                        <NavLink
                            to="/courses"
                            className="nav-link"
                            style={({ isActive }) => ({ color: isActive && "red" })}
                        >
                            Courses
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="nav-link"
                            style={({ isActive }) => ({ fontSize: isActive && "50px" })}
                        >
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
