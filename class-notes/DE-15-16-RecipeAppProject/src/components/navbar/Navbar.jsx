import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerDiv, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
    const [acik, setAcik] = useState(false)
    return (
        <Nav>
            <Logo to="/home" onClick={() => setAcik(false)}>
                <i>{"<Clarusway/>"}</i>
                <span>recipe</span>
            </Logo>
            <HamburgerDiv onClick={() => setAcik(!acik)}>
                <GiHamburgerMenu />
            </HamburgerDiv>

            <Menu osman={acik} onClick={() => setAcik(!acik)}>
                <MenuLink to="/about">About</MenuLink>

                <a href="https://github.com/">Github</a>

                <MenuLink to="/">Logout</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;
