import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Admin</Navbar.Brand> */}
        <Link className="navbar-brand" to="/trangchu">
          Admin
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Đăng nhập</Nav.Link> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/Dangnhap">
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Dangky">
                Đăng ký
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
