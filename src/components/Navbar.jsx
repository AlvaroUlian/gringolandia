import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gringos from "../assets/Gringos.png"

function NavbarGringo() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Gringolandia</Navbar.Brand>
        <img
          src={Gringos}
          width="80"
          className="d-inline-block align-top"
          alt="Gringos logo"
        />
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#catalog">Catálogo</Nav.Link>
          <Nav.Link href="#aboutUs">Sobre Nosotros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarGringo;
