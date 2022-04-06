import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {singout} from '../../actions'
function Header() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(singout());
  }
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout} >Đăng xuất</span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () =>{
    return (
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
    );
  }
  return (
    <Navbar
      style={{ position: "fixed", left: 0, right: 0, zIndex: 9999 }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        {/* <Navbar.Brand href="#home">Admin</Navbar.Brand> */}
        <Link className="navbar-brand" to="/trangchu">
          Admin
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Container>
    </Navbar>
  );
}

export default Header;
