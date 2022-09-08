import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gringos from "../../assets/Gringos.png";
import CartWidget from "../cartWidget/CartWidget";

const NavbarGringo = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Gringolandia</Navbar.Brand>
        <center>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#catalog">Catálogo</Nav.Link>
            <Nav.Link href="#aboutUs">Sobre Nosotros</Nav.Link>
          </Nav>
        </center>
        <img
          src={Gringos}
          width="100"
          className="d-inline-block align-top"
          alt="Gringos logo"
        />
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavbarGringo;
