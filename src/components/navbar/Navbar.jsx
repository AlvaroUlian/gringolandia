import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gringos from "../../assets/Gringos.png";
import CartWidget from "../cartWidget/CartWidget";
import { LinkContainer } from "react-router-bootstrap";

const NavbarGringo = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Gringolandia</Navbar.Brand>
        </LinkContainer>
        <center>
          <Nav className="me-auto">
            <LinkContainer to='/category/1'><Nav.Link >Comida</Nav.Link></LinkContainer>
            <LinkContainer to='/category/2'><Nav.Link >Bebida</Nav.Link></LinkContainer>
            <LinkContainer to='/category/3'><Nav.Link >Salsas</Nav.Link></LinkContainer>
            <Nav.Link >Sobre Nosotros</Nav.Link>
          </Nav>
        </center>
        <img
          src={Gringos}
          width="100"
          className="d-inline-block align-top"
          alt="Gringos logo"
        />
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavbarGringo;
