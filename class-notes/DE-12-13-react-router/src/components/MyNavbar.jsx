import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png"

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink href="#action2">People</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar