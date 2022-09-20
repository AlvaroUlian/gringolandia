import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
//import { LinkContainer } from "react-router-bootstrap";

const Item = ({ id, name, price, img, stock }) => {
  return (
    <>
      <Container fluid>
        <center>
          <Col style={{ marginTop: "30px" }}>
            <Card className="text-center" style={{ width: "21rem" }}>
              <Card.Header>
                <h5>{name}</h5>
              </Card.Header>
              <Card.Body>
                <Card.Img src={img} />
                <Card.Text>Si tienes lana, cómprate uno por U$S {price}</Card.Text>
                <Link to={`/item/${id}`}>
                  <Button variant="dark">Héchale un ojo</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                Solamente quedan {stock} unidades. Apúrale!!!
              </Card.Footer>
            </Card>
          </Col>
        </center>
      </Container>
    </>
  );
};

export default Item;
